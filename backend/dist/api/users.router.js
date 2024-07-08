"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("./users.controller");
const router = (0, express_1.Router)();
router.get("/", users_controller_1.getAllProfiles);
router.get("/:id", users_controller_1.getProfileById);
router.post("/", users_controller_1.createProfile);
router.put("/:id", users_controller_1.updateProfile);
router.delete("/:id", users_controller_1.deleteProfile);
exports.default = router;
//# sourceMappingURL=users.router.js.map