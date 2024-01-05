import { Module } from '@nestjs/common';
import { AnotherModule } from './usecase/another/another.module';
import { GatewayModule } from './usecase/gateway/gateway.module';
import { GatewayController } from './controller/gateway.controller';
import { GatewayFrameWorkModule } from './framework/gateway/gateway.module';

@Module({
  imports: [AnotherModule, GatewayModule],
  // controllers: [GatewayController],
  providers: [],
})
export class AppModule {}