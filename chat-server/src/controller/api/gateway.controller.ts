import { Controller, Get } from '@nestjs/common';
// import { GatewayService } from 'src/usecase/another/gateway/gateway.service';

@Controller('gateway')
export class GatewayController {
  // constructor(private gateway: GatewayService) {}

  @Get('get')
  getGate(): any {
    // return this.gateway.get('vaueshits');
  }
}
