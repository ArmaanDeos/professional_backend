import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
const router = Router();
import { upload } from "../middlewares/multer.middlewares.js";

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

export default router;
