import { Injectable } from '@nestjs/common';
import { MainGateWayAbstract } from 'src/domain/abstracts';

@Injectable()
export class GatewayService {
    constructor(private gateway: MainGateWayAbstract) {}

    get(value: string): any {
        console.log('worked')
        return this.gateway.onModuleInit()
    }
}
