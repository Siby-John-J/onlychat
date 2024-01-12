import { InjectModel } from "@nestjs/mongoose";
import { UserRepoAbstract } from "src/domain";
import { Model } from 'mongoose'
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepo<T> implements UserRepoAbstract<T> {
    constructor(@InjectModel('User') private userModel: Model<T>) {}

    async createUser() {
        await this.userModel.create({
            id: 'burh',
            firstname: 'lwal',
            lastname: 'memes',
            email: 'email@gmail',
            password: 'dead'
        })
    }

    deleteUser() {
        
    }

    editUser() {
        
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
}