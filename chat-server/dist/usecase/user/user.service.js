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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const domain_1 = require("../../domain");
let UserService = class UserService {
    constructor(userrepo) {
        this.userrepo = userrepo;
    }
    createUser(data) {
        return this.userrepo.createUser(data);
    }
    signUpUser(data) {
        return this.userrepo.getUser(data);
    }
    getUser(id) {
        return this.userrepo.getUser(id);
    }
    editUser(data) {
        return this.userrepo.editUser(data);
    }
    getAllUsers() {
        return this.userrepo.getAll();
    }
    addTochat(data) {
        return this.userrepo.addUserToChat(data);
    }
    removeFromChat(data) {
        return this.userrepo.removeUserFromChat(data);
    }
    getChatDetails(data) {
        return this.userrepo.getChatDetails(data);
    }
    addMessage(data) {
        return this.userrepo.addChat(data);
    }
    addMessageToP2(data) {
        return this.userrepo.addChatTo(data);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [domain_1.UserRepoAbstract])
], UserService);
//# sourceMappingURL=user.service.js.map