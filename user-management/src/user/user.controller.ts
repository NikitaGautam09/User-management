// src/user/user.controller.ts

import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Get('search')
  async search(
    @Query('userId') userId: string,
    @Query('username') username?: string,
    @Query('minAge') minAge?: number,
    @Query('maxAge') maxAge?: number,
  ) {
    return this.userService.search(userId, username, minAge, maxAge);
  }
}
