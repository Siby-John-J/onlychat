import { Module } from '@nestjs/common';
import { AnotherModule } from './usecase/another/another.module';
import { GatewayController } from './controller/api/gateway.controller';
import { GatewayFrameWorkModule } from './framework/gateway/gateway.module';
import { UserModule } from './usecase/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AnotherController } from './controller';
import { AuthJwtModule } from './framework/jwt/jwt.module';

@Module({
  imports: [
    AnotherModule,
    AuthJwtModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/onlychat'),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),
  ],
  controllers: [AnotherController],
  providers: [],
})
export class AppModule {}
