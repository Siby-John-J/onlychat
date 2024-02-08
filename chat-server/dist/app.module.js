"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const gateway_module_1 = require("./framework/gateway/gateway.module");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const controller_1 = require("./controller");
const jwt_module_1 = require("./framework/jwt/jwt.module");
const usecase_1 = require("./usecase");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            usecase_1.UserModule,
            usecase_1.ChatModule,
            jwt_module_1.AuthJwtModule,
            gateway_module_1.GatewayFrameWorkModule,
            mongoose_1.MongooseModule.forRoot('mongodb://127.0.0.1:27017/onlychat'),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: './.env',
            }),
        ],
        controllers: [controller_1.AnotherController, controller_1.ChatController],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map