import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { MainGateWayAbstract } from 'src/domain/abstracts';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';
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

  @SubscribeMessage('send:offer')
  onnewMessage2(@MessageBody() body: any) {
    const { offer, id, name } = JSON.parse(body)

    this.server.emit(id, JSON.stringify({
      _offer: offer,
      name: name
    }))
  }

  @SubscribeMessage('decline:offer')
  cancelOffer(@MessageBody() body: any) {
    this.server.emit(`cancel-call:${body}`, 'cut the crap')
  }

  @SubscribeMessage('send:answer')
  acceptOffer(@MessageBody() body: any) {
    const { id, answer } = JSON.parse(body)

    this.server.emit(`send-ans:${id}`, JSON.stringify(answer))
  }

  @SubscribeMessage('cancel:stream')
  cancelStream(@MessageBody() body: any) {
    const { myid, id } = JSON.parse(body)

    this.server.emit(`getcancel:${id}`, JSON.stringify(body))
  }
}
