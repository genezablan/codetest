import { Request, Response } from "express";

import {UserProfile} from "./users.model";

import UserService from './users.service'

import mongoose from 'mongoose';


export const getProfileById = async(req:Request, res:Response) => {
    const profile: any = await UserService.getProfileById( new mongoose.Types.ObjectId(req.params['id']));
    res.json(profile);
}

export const getAllProfiles = async (req: Request, res: Response) => {
    const profiles = await UserService.getAllProfiles();
    res.json(profiles);
};

export const createProfile = async (req: Request, res: Response) => {
    try {
        const newProfile = new UserProfile(req.body);
        const profile = await newProfile.save();
        return res.json(profile);
    }catch(err:any) {
        return res.status(400).send({err: err.message});
    }
};

export const updateProfile = async (req: Request, res: Response) => {
    const profile = await UserService.updateProfileById(new mongoose.Types.ObjectId(req.params['id']), req.body);
    res.send(profile);
};
  
export const deleteProfile = async (req: Request, res: Response) => {
    const profile: any = await UserService.deleteProfileById( new mongoose.Types.ObjectId(req.params['id']));
    res.json({ msg: "Profile removed", profile });
};