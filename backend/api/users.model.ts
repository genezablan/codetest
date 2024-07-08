import {Schema, model} from 'mongoose';
import { IUserProfile } from './users.interface';

const UserProfileSchema = new Schema({
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

export const UserProfile = model<IUserProfile>('UserProfile', UserProfileSchema )
