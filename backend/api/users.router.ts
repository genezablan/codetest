import { Router } from 'express';
import { getAllProfiles, getProfileById, createProfile, updateProfile, deleteProfile } from './users.controller';

const router: Router = Router();


router.get("/", getAllProfiles);
router.get("/:id", getProfileById);
router.post("/", createProfile);
router.put("/:id", updateProfile);
router.delete("/:id", deleteProfile);

export default router;