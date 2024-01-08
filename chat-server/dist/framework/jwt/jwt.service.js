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
exports.jwtAuth = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
let jwtAuth = class jwtAuth {
    constructor(jwt) {
        this.jwt = jwt;
    }
    signToken(data) {
        const val = this.jwt.sign(data, { expiresIn: '8s', secret: process.env.ACCESS_TOKEN_SECRET });
        return val;
    }
    refreshToken(data) {
        const val = this.jwt.sign(data, { secret: process.env.REFRESH_TOKEN_SECREAT });
        return val;
    }
    verifyToken(token) {
        const val = this.jwt.verify(token, {
            secret: process.env.ACCESS_TOKEN_SECRET
        });
        return val;
    }
};
exports.jwtAuth = jwtAuth;
exports.jwtAuth = jwtAuth = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], jwtAuth);
//# sourceMappingURL=jwt.service.js.map