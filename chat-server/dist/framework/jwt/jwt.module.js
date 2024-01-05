"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthJwtModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const domain_1 = require("../../domain");
const jwt_service_1 = require("./jwt.service");
let AuthJwtModule = class AuthJwtModule {
};
exports.AuthJwtModule = AuthJwtModule;
exports.AuthJwtModule = AuthJwtModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                global: true,
                secret: 'random',
            }),
        ],
        providers: [
            {
                provide: domain_1.jwtAbstract,
                useClass: jwt_service_1.jwtAuth,
            },
        ],
        exports: [domain_1.jwtAbstract],
    })
], AuthJwtModule);
//# sourceMappingURL=jwt.module.js.map