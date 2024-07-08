"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfile = exports.updateProfile = exports.createProfile = exports.getAllProfiles = exports.getProfileById = void 0;
const users_model_1 = require("./users.model");
const users_service_1 = __importDefault(require("./users.service"));
const mongoose_1 = __importDefault(require("mongoose"));
const getProfileById = async (req, res) => {
    const profile = await users_service_1.default.getProfileById(new mongoose_1.default.Types.ObjectId(req.params['id']));
    res.json(profile);
};
exports.getProfileById = getProfileById;
const getAllProfiles = async (req, res) => {
    const profiles = await users_service_1.default.getAllProfiles();
    res.json(profiles);
};
exports.getAllProfiles = getAllProfiles;
const createProfile = async (req, res) => {
    try {
        const newProfile = new users_model_1.UserProfile(req.body);
        const profile = await newProfile.save();
        return res.json(profile);
    }
    catch (err) {
        return res.status(400).send({ err: err.message });
    }
};
exports.createProfile = createProfile;
const updateProfile = async (req, res) => {
    const profile = await users_service_1.default.updateProfileById(new mongoose_1.default.Types.ObjectId(req.params['id']), req.body);
    res.send(profile);
};
exports.updateProfile = updateProfile;
const deleteProfile = async (req, res) => {
    const profile = await users_service_1.default.deleteProfileById(new mongoose_1.default.Types.ObjectId(req.params['id']));
    res.json({ msg: "Profile removed", profile });
};
exports.deleteProfile = deleteProfile;
//# sourceMappingURL=users.controller.js.map