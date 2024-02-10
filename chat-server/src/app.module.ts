import { Module } from '@nestjs/common';
import { GatewayController } from './controller/api/gateway.controller';
import { GatewayFrameWorkModule } from './framework/gateway/gateway.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AnotherController, ChatController } from './controller';
import { AuthJwtModule } from './framework/jwt/jwt.module';
import { GatewayModule } from './usecase/gateway/gateway.module';

import { ChatModule, UserModule } from './usecase';

@Module({
  imports: [
    UserModule,
    ChatModule,
    AuthJwtModule,
    GatewayModule,
    GatewayFrameWorkModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/onlychat'),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),
  ],
  controllers: [AnotherController, ChatController],
  providers: [],
})
export class AppModule {}
