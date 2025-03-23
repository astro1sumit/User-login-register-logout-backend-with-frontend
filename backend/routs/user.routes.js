import {Router} from "express";
import * as userController from "../controllers/user.controller.js";
import {body} from "express-validator";
import * as authMiddleware from "../middleware/auth.middleware.js";
const router = Router();

router.post('/register',
    body("email").isEmail().withMessage("Email is required"),
    body("password").isLength({min: 6}).withMessage("Password is required"),

    userController.createUserController);

router.post('/login',
    body("email").isEmail().withMessage("Email is required"),
    body("password").isLength({min: 6}).withMessage("Password is required"),
    userController.loginController
    );

router.get('/profile',authMiddleware.authUser, userController.profileController);

router.get('/logout',authMiddleware.authUser, userController.logoutController)

export default router;