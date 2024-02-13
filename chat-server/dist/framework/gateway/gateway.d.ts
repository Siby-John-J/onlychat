import { MainGateWayAbstract } from 'src/domain/abstracts';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';
import { ChatService } from 'src/usecase/chat/chat.service';
export declare class MainGateWay implements MainGateWayAbstract, OnModuleInit {
    private chat;
    constructor(chat: ChatService);
    server: Server;
    onModuleInit(): void;
    onnewMessage(body: any): any;
    onnewMessage2(body: any): void;
    cancelOffer(body: any): void;
    acceptOffer(body: any): void;
}
