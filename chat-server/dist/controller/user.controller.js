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
const another_service_1 = require("../usecase/another/another.service");
const domain_1 = require("../domain");
const jwt_guard_1 = require("./guards/jwt.guard");
let AnotherController = class AnotherController {
    constructor(another, jwt) {
        this.another = another;
        this.jwt = jwt;
        this.refreshList = [];
    }
    getAnother(body, res) {
        const token = this.jwt.signToken(body);
        const refresh = this.jwt.refreshToken(body);
        this.refreshList.push(refresh);
        res.cookie('Berer', token);
        return {
            'access': token,
            'refresh': refresh
        };
    }
    signInUSer(data) {
        console.log(data);
        return 'get it';
    }
    chatUser() {
        return 'lwal';
    }
    refreshToken(data, res) {
        res.clearCookie('Berer');
        if (this.refreshList.includes(data['token'])) {
            const new_token = this.jwt.verifyToken(data['token']);
            const access_token = this.jwt.signToken({
                email: new_token['email'],
                password: new_token['password']
            });
            res.cookie('Berer', access_token);
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
    __metadata("design:returntype", Object)
], AnotherController.prototype, "getAnother", null);
__decorate([
    (0, common_1.Get)('signin'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AnotherController.prototype, "signInUSer", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Get)('chat'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
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
    __metadata("design:paramtypes", [another_service_1.AnotherService,
        domain_1.jwtAbstract])
], AnotherController);
//# sourceMappingURL=user.controller.js.map