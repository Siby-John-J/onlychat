import { InjectModel } from "@nestjs/mongoose";
import { UserDto, UserRepoAbstract } from "src/domain";
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

    getUser() {
        
    }
}