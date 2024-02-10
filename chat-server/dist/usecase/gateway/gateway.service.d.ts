import { OnModuleInit } from '@nestjs/common';
import { Server } from 'socket.io';
export declare class GatewayService implements OnModuleInit {
    server: Server;
    get(value: boolean): any;
    onModuleInit(): void;
}
