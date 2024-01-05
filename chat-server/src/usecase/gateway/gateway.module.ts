import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { GatewayFrameWorkModule } from 'src/framework/gateway/gateway.module';
import { GatewayController } from 'src/controller/gateway.controller';

@Module({
  imports: [GatewayFrameWorkModule],
  controllers: [GatewayController],
  providers: [GatewayService],
  exports: [GatewayService]
})
export class GatewayModule {}
