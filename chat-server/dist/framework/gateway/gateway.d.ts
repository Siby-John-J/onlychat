import { MainGateWayAbstract } from "src/domain/abstracts";
import { Server } from "socket.io";
import { OnModuleInit } from "@nestjs/common";
export declare class MainGateWay implements MainGateWayAbstract, OnModuleInit {
    server: Server;
    onModuleInit(): void;
    onnewMessage(body: any): any;
}
