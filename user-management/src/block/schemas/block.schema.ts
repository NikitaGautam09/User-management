import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type BlockDocument = Block & Document;

@Schema()
export class Block {
  @Prop({ required: true })
  userId: Types.ObjectId;

  @Prop({ required: true })
  blockedUserId: Types.ObjectId;
}

export const BlockSchema = SchemaFactory.createForClass(Block);
