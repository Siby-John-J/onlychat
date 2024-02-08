import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { MainGateWayAbstract } from 'src/domain/abstracts';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';
import { UserService } from 'src/usecase/user/user.service';
import { ChatService } from 'src/usecase/chat/chat.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  singleton: true,
})
export class MainGateWay implements MainGateWayAbstract, OnModuleInit {
  constructor(private chat: ChatService) {}

  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      // console.log(socket.id)
      // socket.join('room1')
    });
  }

  @SubscribeMessage('msg')
  onnewMessage(@MessageBody() body: any): any {

    this.chat.addMessage(body);
    this.chat.addMessageToP2(body);

    this.server.emit('refresh', true);
  }
}
