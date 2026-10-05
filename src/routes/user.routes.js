import { Router } from "express";

import {
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
} from "../controllers/user.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

// Register
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

// Login
router.route("/login").post(loginUser);

// Logout
router.route("/logout").post(verifyJWT, logoutUser);

// Refresh Token
router.route("/refresh-token").post(refreshAccessToken)

export default router;
