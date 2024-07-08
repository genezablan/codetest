"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserProfileSchema = exports.createUserProfileSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createUserProfileSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
    age: joi_1.default.number(),
    tags: joi_1.default.array().items(joi_1.default.string())
});
exports.updateUserProfileSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
    age: joi_1.default.number(),
    tags: joi_1.default.array().items(joi_1.default.string())
});
//# sourceMappingURL=users.schema.js.map