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
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("../../usecase/chat/chat.service");
const gateway_service_1 = require("../../usecase/gateway/gateway.service");
let ChatController = class ChatController {
    constructor(chat, gateway) {
        this.chat = chat;
        this.gateway = gateway;
    }
    async addToChat(data) {
        this.chat.addTochat(data);
    }
    async removeFromChat(data) {
        this.chat.removeFromChat(data);
        return 'get it lwal';
    }
    async clearChat(data) {
        const res = this.chat.clearChat(data);
        this.gateway.onModuleInit();
        this.gateway.get(true);
    }
    async getUserChat(id) {
        const data = this.chat.getChatDetails(id['0']);
        return data;
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.Put)('addto_chat'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "addToChat", null);
__decorate([
    (0, common_1.Delete)('remove_user'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "removeFromChat", null);
__decorate([
    (0, common_1.Delete)('clear_chat'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "clearChat", null);
__decorate([
    (0, common_1.Get)('getby_id'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getUserChat", null);
exports.ChatController = ChatController = __decorate([
    (0, common_1.Controller)('chat'),
    __metadata("design:paramtypes", [chat_service_1.ChatService,
        gateway_service_1.GatewayService])
], ChatController);
//# sourceMappingURL=chat.controller.js.map