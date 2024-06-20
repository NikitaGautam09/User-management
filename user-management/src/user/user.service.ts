// src/user/user.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return updatedUser;
  }

  async remove(id: string): Promise<User> {
    const deletedUser = await this.userModel.findOneAndDelete({ _id: id }).exec();
    if (!deletedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return deletedUser;
  }

  async search(userId: string, username?: string, minAge?: number, maxAge?: number): Promise<User[]> {
    const query: any = {};
    if (username) {
      query['username'] = { $regex: username, $options: 'i' };
    }
    if (minAge || maxAge) {
      const today = new Date();
      if (minAge) {
        const minBirthdate = new Date(today.setFullYear(today.getFullYear() - minAge));
        query['birthdate'] = { $lte: minBirthdate };
      }
      if (maxAge) {
        const maxBirthdate = new Date(today.setFullYear(today.getFullYear() - maxAge));
        query['birthdate'] = { ...query['birthdate'], $gte: maxBirthdate };
      }
    }

    const users = await this.userModel.find(query).exec();
    const blockedUsers: string[] = []; 
    return users.filter(user => !blockedUsers.includes(user.id));
  }
}
