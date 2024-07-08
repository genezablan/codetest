"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfileById = exports.updateProfileById = exports.createProfile = exports.getProfileById = exports.getAllProfiles = void 0;
const users_model_1 = require("./users.model");
const users_schema_1 = require("./users.schema");
const getAllProfiles = async () => {
    const profiles = await users_model_1.UserProfile.find();
    return profiles;
};
exports.getAllProfiles = getAllProfiles;
const getProfileById = async (id) => {
    const userProfile = await users_model_1.UserProfile.findOne({ _id: id });
    return userProfile;
};
exports.getProfileById = getProfileById;
const createProfile = async (data) => {
    await users_schema_1.createUserProfileSchema.validateAsync(data);
    return await users_model_1.UserProfile.create(data);
};
exports.createProfile = createProfile;
const updateProfileById = async (id, data) => {
    await users_schema_1.updateUserProfileSchema.validateAsync(data);
    return await users_model_1.UserProfile.findOneAndUpdate({ _id: id }, data, { new: false, upsert: false });
};
exports.updateProfileById = updateProfileById;
const deleteProfileById = async (id) => {
    return await users_model_1.UserProfile.findByIdAndDelete({ _id: id });
};
exports.deleteProfileById = deleteProfileById;
exports.default = {
    getAllProfiles: exports.getAllProfiles,
    getProfileById: exports.getProfileById,
    updateProfileById: exports.updateProfileById,
    deleteProfileById: exports.deleteProfileById
};
//# sourceMappingURL=users.service.js.map