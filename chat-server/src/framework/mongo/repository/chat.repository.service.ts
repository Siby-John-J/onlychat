import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from "mongoose"
import { ChatAction, ChatRepoAbstract, chatDto } from "src/domain";

@Injectable()
export class ChatRepo<T> implements ChatRepoAbstract<T> {
    constructor(@InjectModel("User") private userModel: Model<T>) {}

    async addChat(data: chatDto) {
        const { message, senderId, recvId } = data

        const add_chat = await this.userModel.updateOne(
            {id: senderId, "chats.id": recvId},
            { $push: { "chats.$.data": {p1: message} } }
        )
    }

    async addChatTo(data: chatDto) {
        const { message, senderId, recvId } = data
        const add_chat = await this.userModel.updateOne(
            { id: recvId, "chats.id": senderId },
            { $push: { "chats.$.data": { p2: message } } }
        )
    }

    async addUserToChat(data: ChatAction) {
        const {myId, id} = data

        const chat_update = await this.userModel.updateOne({id: myId}, {
            $push: { chats: {
                id: id,
                data: []
            } }
        })

        const chat_update_peer2 = await this.userModel.updateOne({id: id}, {
            $push: { chats: {
                id: myId,
                data: []
            } }
        })

        return chat_update
    }

    async removeUserFromChat(data: ChatAction) {
        const { myId, id } = data

        const chat_remove = await this.userModel.updateOne({id: myId}, {
            $pull: { chats: {
                id: id
            } }
        })
        
        return chat_remove
    }

    async getChatDetails(data: object) {
        const chat_update = await this.userModel.find({id: data})

        return chat_update
    }

    async clearChat(data: object) {
        // const clear_chat = await this.userModel.updateOne(
        //     {},
        //     { $set: { 'chats.$.data': [] } }
        // )

        // return clear_chat
    }
}