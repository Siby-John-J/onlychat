import { InjectModel } from "@nestjs/mongoose";
import { AddChat, UserDto, UserRepoAbstract } from "src/domain";
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

    async addUserToChat(data: AddChat) {
        const {myId, id} = data

        const check_update = await this.userModel.findOne({id: myId}, {_id: 0, chats: 1})

        const res = check_update['chats'].map(dat => {
            if(dat.id === id) {
                return true
            }
        })[0]

        if(res === true) {
            const chat_remove = await this.userModel.updateOne({id: myId}, {
                $pull: {
                    'chats': {
                        "id": id
                    }
                }
            })
            
            return 'removed'
        } else {
            const chat_update = await this.userModel.updateOne({id: myId}, {
                $push: { chats: {
                    id: id,
                    data: []
                } }
            })

            return 'added'
        }
    }

    async getChatDetails(data: object) {
        const chat_update = await this.userModel.find({id: data})

        return chat_update
    }
}