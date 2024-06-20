// src/block/block.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Block, BlockDocument } from './schemas/block.schema';

@Injectable()
export class BlockService {
  constructor(
    @InjectModel(Block.name) private blockModel: Model<BlockDocument>
  ) {}

  async blockUser(userId: string, blockedUserId: string): Promise<Block> {
    const newBlock = new this.blockModel({ userId, blockedUserId });
    return newBlock.save();
  }

  async unblockUser(userId: string, blockedUserId: string): Promise<Block> {
    const block = await this.blockModel.findOneAndDelete({ userId, blockedUserId }).exec();
    if (!block) {
      throw new NotFoundException('Block relationship not found');
    }
    return block;
  }

  async getBlockedUsers(userId: string): Promise<string[]> {
    const blocks = await this.blockModel.find({ userId }).exec();
    return blocks.map(block => block.blockedUserId.toString()); // Convert ObjectId to string
  }
}
