import { Document } from 'mongoose';

export interface IUserProfile {
  name: string;
  email: string;
  age?: number;
  tags?: string[];
}

export interface IUserProfileDoc extends IUserProfile, Document {
}
