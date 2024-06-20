// src/block/block.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { BlockService } from './block.service';

@Controller('block')
export class BlockController {
  constructor(private readonly blockService: BlockService) {}

  @Post()
  async blockUser(@Body() body: { userId: string; blockedUserId: string }) {
    const { userId, blockedUserId } = body;
    return this.blockService.blockUser(userId, blockedUserId);
  }

  @Post('unblock')
  async unblockUser(@Body() body: { userId: string; blockedUserId: string }) {
    const { userId, blockedUserId } = body;
    return this.blockService.unblockUser(userId, blockedUserId);
  }
}
