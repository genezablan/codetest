"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const users_router_1 = __importDefault(require("./api/users.router"));
const connectDB = async () => {
    try {
        await mongoose_1.default.connect("mongodb://localhost:27017/userProfileDB");
        console.log("MongoDB Connected...");
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
const app = (0, express_1.default)();
const PORT = process.env['PORT'] || 8080;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/users', users_router_1.default);
connectDB().then(() => {
    console.info('Connected to MongoDb');
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
//# sourceMappingURL=index.js.map