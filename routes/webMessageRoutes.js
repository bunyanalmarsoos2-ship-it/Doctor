import express from "express";
import { createMessage, deleteWebMessage, getAllMessages } from "../controllers/webMessageController.js";
import { isAdmin, userAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

//create message
router.post("/create", createMessage);
router.get("/getAll", getAllMessages);
router.delete("/deleteMessage/:id",userAuth, isAdmin, deleteWebMessage);

export default router;
