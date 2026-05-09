import express from "express";
import {
  updatePassword,
  uploadUser,
  userLogin,
  userRegister,
} from "../controllers/userController.js";
import { userAuth } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";

const router = express();

// Register || Post
router.post("/register", userRegister);
router.post("/login", userLogin);
router.patch("/update/:id", userAuth, upload.single("image"), uploadUser);
router.patch("/update-password/:id", userAuth, updatePassword);

export default router;
