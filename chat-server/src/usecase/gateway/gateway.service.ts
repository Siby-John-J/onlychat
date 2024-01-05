import { Injectable } from '@nestjs/common';
import { MainGateWayAbstract } from 'src/domain/abstracts';

@Injectable()
export class GatewayService {
    // private gateway: MainGateWayAbstract
    constructor(private gateway: MainGateWayAbstract) {}

    get(value: string): any {
        console.log('worked')
        return this.gateway.onModuleInit()
    }
}
