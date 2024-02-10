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
exports.ChatRepo = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ChatRepo = class ChatRepo {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async addChat(data) {
        const { message, senderId, recvId } = data;
        const add_chat = await this.userModel.updateOne({ id: senderId, "chats.id": recvId }, { $push: { "chats.$.data": { p1: message } } });
    }
    async addChatTo(data) {
        const { message, senderId, recvId } = data;
        const add_chat = await this.userModel.updateOne({ id: recvId, "chats.id": senderId }, { $push: { "chats.$.data": { p2: message } } });
    }
    async addUserToChat(data) {
        const { myId, id } = data;
        const chat_update = await this.userModel.updateOne({ id: myId }, {
            $push: { chats: {
                    id: id,
                    data: []
                } }
        });
        const chat_update_peer2 = await this.userModel.updateOne({ id: id }, {
            $push: { chats: {
                    id: myId,
                    data: []
                } }
        });
        return {
            chat_update,
            chat_update_peer2
        };
    }
    async removeUserFromChat(data) {
        const { myId, id } = data;
        const chat_remove = await this.userModel.updateOne({ id: myId }, {
            $pull: { chats: {
                    id: id
                } }
        });
        return chat_remove;
    }
    async getChatDetails(data) {
        const chat_update = await this.userModel.find({ id: data });
        return chat_update;
    }
    async clearChat(data) {
        const { myId, id } = data;
        const clear_chat = await this.userModel.updateOne({ id: myId, 'chats.id': id }, { $set: { 'chats.$.data': [] } });
        return clear_chat;
    }
};
exports.ChatRepo = ChatRepo;
exports.ChatRepo = ChatRepo = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("User")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ChatRepo);
//# sourceMappingURL=chat.repository.service.js.map