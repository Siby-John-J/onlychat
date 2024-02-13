"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainGateWay = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const chat_service_1 = require("../../usecase/chat/chat.service");
let MainGateWay = class MainGateWay {
    constructor(chat) {
        this.chat = chat;
    }
    onModuleInit() {
        this.server.on('connection', (socket) => {
        });
    }
    onnewMessage(body) {
        this.chat.addMessage(body);
        this.chat.addMessageToP2(body);
        this.server.emit('refresh', true);
    }
    onnewMessage2(body) {
        const { offer, id } = JSON.parse(body);
        this.server.emit(id, JSON.stringify(offer));
    }
    cancelOffer(body) {
        this.server.emit(`cancel-call:${body}`, 'cut the crap');
    }
    acceptOffer(body) {
        const { id, answer } = JSON.parse(body);
        this.server.emit(`send-ans:${id}`, JSON.stringify(answer));
    }
};
exports.MainGateWay = MainGateWay;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], MainGateWay.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('msg'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], MainGateWay.prototype, "onnewMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('send:offer'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MainGateWay.prototype, "onnewMessage2", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('decline:offer'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MainGateWay.prototype, "cancelOffer", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('send:answer'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MainGateWay.prototype, "acceptOffer", null);
exports.MainGateWay = MainGateWay = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
        singleton: true,
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], MainGateWay);
//# sourceMappingURL=gateway.js.map