"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnotherModule = void 0;
const common_1 = require("@nestjs/common");
const another_service_1 = require("./another.service");
const mongo_module_1 = require("../../framework/mongo/mongo.module");
let AnotherModule = class AnotherModule {
};
exports.AnotherModule = AnotherModule;
exports.AnotherModule = AnotherModule = __decorate([
    (0, common_1.Module)({
        imports: [mongo_module_1.MongoModule],
        providers: [another_service_1.AnotherService],
        exports: [another_service_1.AnotherService],
    })
], AnotherModule);
//# sourceMappingURL=another.module.js.map