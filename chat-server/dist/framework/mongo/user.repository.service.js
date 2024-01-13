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
exports.UserRepo = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let UserRepo = class UserRepo {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async createUser(data) {
        await this.userModel.create({
            id: (0, crypto_1.randomUUID)(),
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password
        });
    }
    deleteUser() {
    }
    async editUser(data) {
        if (data['password'] !== '') {
            const dat = await this.userModel.updateOne({ id: data['id'] }, {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password
            });
        }
        else {
            const dat = await this.userModel.updateOne({ id: data['id'] }, {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
            });
        }
    }
    async getUser(data) {
        if (typeof data === 'string') {
            const user = await this.userModel.findOne({ id: data });
            return user;
        }
        const { email, password } = data;
        const user = await this.userModel.findOne({
            email: email,
            password: password
        });
        return user;
    }
    async getAll() {
        const all_users = await this.userModel.find();
        return all_users;
    }
    async addUserToChat(data) {
        const { myId, id } = data;
        const check_update = await this.userModel.findOne({ id: myId }, { _id: 0, chats: 1 });
        const res = check_update['chats'].map(dat => {
            if (dat.id === id) {
                return true;
            }
        })[0];
        if (res === true) {
            const chat_remove = await this.userModel.updateOne({ id: myId }, {
                $pull: {
                    'chats': {
                        "id": id
                    }
                }
            });
            return 'removed';
        }
        else {
            const chat_update = await this.userModel.updateOne({ id: myId }, {
                $push: { chats: {
                        id: id,
                        data: []
                    } }
            });
            return 'added';
        }
    }
    async getChatDetails(data) {
        const chat_update = await this.userModel.find({ id: data });
        return chat_update;
    }
};
exports.UserRepo = UserRepo;
exports.UserRepo = UserRepo = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserRepo);
//# sourceMappingURL=user.repository.service.js.map