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
exports.AnotherController = void 0;
const common_1 = require("@nestjs/common");
const domain_1 = require("../../domain");
const user_service_1 = require("../../usecase/user/user.service");
let AnotherController = class AnotherController {
    constructor(jwt, user) {
        this.jwt = jwt;
        this.user = user;
        this.refreshList = [];
    }
    async getAnother(body, res) {
        await this.user.createUser(body);
    }
    async signInUSer(data) {
        const res = await this.user.signUpUser(data);
        if (res !== null) {
            return res.id;
        }
        return false;
    }
    async getUser(id) {
        const res = await this.user.getUser(id.id);
        return res;
    }
    async getAllUsers() {
        const users = await this.user.getAllUsers();
        return users;
    }
    async editUser(data) {
        this.user.editUser(data);
    }
    chatUser(data) {
        console.log(data);
        return 'lwal';
    }
    refreshToken(data, res) {
        res.clearCookie('Berer');
        if (this.refreshList.includes(data['token'])) {
        }
    }
};
exports.AnotherController = AnotherController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AnotherController.prototype, "getAnother", null);
__decorate([
    (0, common_1.Get)('signin'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnotherController.prototype, "signInUSer", null);
__decorate([
    (0, common_1.Get)('get_user'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnotherController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)('getall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnotherController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Patch)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnotherController.prototype, "editUser", null);
__decorate([
    (0, common_1.Put)('chat'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnotherController.prototype, "chatUser", null);
__decorate([
    (0, common_1.Post)('token'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AnotherController.prototype, "refreshToken", null);
exports.AnotherController = AnotherController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [domain_1.jwtAbstract,
        user_service_1.UserService])
], AnotherController);
//# sourceMappingURL=user.controller.js.map