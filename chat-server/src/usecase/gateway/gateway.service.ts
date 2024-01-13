import { Injectable } from '@nestjs/common';
import { MainGateWayAbstract } from 'src/domain/abstracts';
import { OnModuleInit } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
    cors: {
        origin: ['http://localhost:5173']
    }
})

@Injectable()
export class GatewayService implements OnModuleInit{
    @WebSocketServer()
    server: Server
    // constructor(private gateway: MainGateWayAbstract) {}

    // get(value: string): any {
    //     console.log('worked')
    //     return this.gateway.onModuleInit()
    // }

    onModuleInit() {
        this.server.on('connection', (socket) =>{
            socket.on('msg', soc => {
                console.log(soc, ' socket')
            })
        })
    }
}
