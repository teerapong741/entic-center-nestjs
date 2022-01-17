import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost:27017/test`),
    ConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
