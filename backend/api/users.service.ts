import { UserProfile } from "./users.model";
import mongoose, {Document} from 'mongoose';
import { IUserProfileDoc, IUserProfile } from './users.interface';
import { createUserProfileSchema, updateUserProfileSchema }  from './users.schema';
import httpStatus from 'http-status';
import ApiError from '../errors/ApiError';

export const getAllProfiles = async () => {
    const profiles = await UserProfile.find();
    return profiles;
};

export const getProfileById = async (id: mongoose.Types.ObjectId) => {
    const userProfile = await UserProfile.findOne({ _id: id });
    return userProfile;
};

export const createProfile = async( data: IUserProfileDoc ) => {
    await createUserProfileSchema.validateAsync(data)
    return await UserProfile.create(data)
}

export const updateProfileById = async (id: mongoose.Types.ObjectId, data: IUserProfileDoc)  => {
    await updateUserProfileSchema.validateAsync(data)
    return await UserProfile.findOneAndUpdate({_id: id } , data, { new: false, upsert: false });
};

export const deleteProfileById = async (id: mongoose.Types.ObjectId)  => {
    return await UserProfile.findByIdAndDelete({_id: id });
};

export default {
    getAllProfiles,
    getProfileById,
    updateProfileById,
    deleteProfileById,
    createProfile
}