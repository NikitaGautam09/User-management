import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://kapilsp19:nikitaDB@usermanage.vln9jsa.mongodb.net/?retryWrites=true&w=majority&appName=usermanage'), // adjust connection string as needed
  ],
})
export class DatabaseModule {}
