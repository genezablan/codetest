"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
const mongoose_1 = require("mongoose");
const UserProfileSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
    },
    tags: {
        type: [String],
        default: "",
    },
});
exports.UserProfile = (0, mongoose_1.model)('UserProfile', UserProfileSchema);
//# sourceMappingURL=users.model.js.map