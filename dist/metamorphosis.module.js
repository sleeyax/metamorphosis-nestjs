"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MetamorphosisModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetamorphosisModule = void 0;
const common_1 = require("@nestjs/common");
const metamorphosis_service_1 = require("./metamorphosis.service");
const ConversionServiceFactory = (logger = false, plugins) => ({
    provide: metamorphosis_service_1.ConversionService,
    useFactory: () => new metamorphosis_service_1.ConversionService(logger, plugins)
});
let MetamorphosisModule = MetamorphosisModule_1 = class MetamorphosisModule {
    static register({ logger, plugins } = { logger: false, plugins: [] }) {
        return {
            module: MetamorphosisModule_1,
            providers: [ConversionServiceFactory(logger, plugins)],
            exports: [metamorphosis_service_1.ConversionService],
        };
    }
};
MetamorphosisModule = MetamorphosisModule_1 = __decorate([
    (0, common_1.Module)({})
], MetamorphosisModule);
exports.MetamorphosisModule = MetamorphosisModule;
//# sourceMappingURL=metamorphosis.module.js.map