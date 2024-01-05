import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets"
import { MainGateWayAbstract } from "src/domain/abstracts"
import { Server } from "socket.io"
import { OnModuleInit } from "@nestjs/common"

@WebSocketGateway({
    cors: {
        origin: '*'
    },
    singleton: true
})
export class MainGateWay implements MainGateWayAbstract, OnModuleInit {

    @WebSocketServer()
    server: Server

    onModuleInit() {
        this.server.on('connection', (socket) => {
            console.log(socket.id)
            socket.join('room1')
        })
    }

    @SubscribeMessage('new_message')
    onnewMessage(@MessageBody() body : any ): any {
        // this.server.emit('get_message', body.data)
        console.log(body)
    }
}
