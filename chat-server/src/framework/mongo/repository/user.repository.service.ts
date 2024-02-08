import { InjectModel } from "@nestjs/mongoose";
import { ChatAction, UserDto, UserRepoAbstract, chatDto } from "src/domain";
import { Model } from 'mongoose'
import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";

@Injectable()
export class UserRepo<T> implements UserRepoAbstract<T> {
    constructor(@InjectModel('User') private userModel: Model<T>) {}

    async createUser(data: UserDto) {
        await this.userModel.create({
            id: randomUUID(),
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password
        })
    }

    deleteUser() {
        
    }

    async editUser(data: UserDto) {
        if(data['password'] !== '') {
            const dat = await this.userModel.updateOne({id: data['id']}, {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password
            })
        } else {
            const dat = await this.userModel.updateOne({id: data['id']}, {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
            })
        }
    }

    async getUser(data: any) : Promise<null | object> {
        if(typeof data === 'string') {
            const user = await this.userModel.findOne({id: data})
            return user
        }

        const { email, password } = data
        
        const user = await this.userModel.findOne({
            email: email,
            password: password
        })
        
        return user
    }

    async getAll(): Promise<any> {
        const all_users = await this.userModel.find()

        return all_users
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
}
