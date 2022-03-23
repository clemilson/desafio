"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeocalizationApi = void 0;
const base_1 = __importDefault(require("./base"));
const utf8_1 = __importDefault(require("utf8"));
class GeocalizationApi {
    static searchDataAdresses(data) {
        return base_1.default.post(`${utf8_1.default.encode(data)}&key=${process.env.key}`);
    }
}
exports.GeocalizationApi = GeocalizationApi;
