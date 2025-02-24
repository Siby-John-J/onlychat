"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayFrameWorkModule = void 0;
const common_1 = require("@nestjs/common");
const abstracts_1 = require("../../domain/abstracts");
const gateway_1 = require("./gateway");
const usecase_1 = require("../../usecase");
let GatewayFrameWorkModule = class GatewayFrameWorkModule {
};
exports.GatewayFrameWorkModule = GatewayFrameWorkModule;
exports.GatewayFrameWorkModule = GatewayFrameWorkModule = __decorate([
    (0, common_1.Module)({
        imports: [usecase_1.ChatModule],
        providers: [
            {
                provide: abstracts_1.MainGateWayAbstract,
                useClass: gateway_1.MainGateWay,
            },
        ],
        exports: [abstracts_1.MainGateWayAbstract],
    })
], GatewayFrameWorkModule);
//# sourceMappingURL=gateway.module.js.map