import { Router } from "express";
import createUserController from "../controllers/createUser.controller"
import deleteUserController from "../controllers/deleteUser.controller"
import listUsersController from "../controllers/listUsers.controller"
import updateUserController from "../controllers/updateUser.controller"
import userLoginController from "../controllers/userLogin.controller"
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middlewares";

const router = Router()

router.post("",verifyEmailAvailabilityMiddleware,createUserController)
router.get("",listUsersController)
router.patch("/:id",updateUserController)
router.delete("/:id",verifyAuthTokenMiddleware, deleteUserController)
router.post("/login",verifyAuthTokenMiddleware, userLoginController)

export default router