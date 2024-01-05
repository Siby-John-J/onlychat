import { Module } from '@nestjs/common';
import { MainGateWayAbstract } from 'src/domain/abstracts';
import { MainGateWay } from './gateway';

@Module({
    providers: [
        {
            provide: MainGateWayAbstract,
            useClass: MainGateWay
        }
    ],
    exports: [MainGateWayAbstract]
})
export class GatewayFrameWorkModule {}
