import { Router } from "express";
import AdminAuthController from "../../controller/Auth/AdminAuth.js";

const AdminRouter = Router();

AdminRouter.post("/register", AdminAuthController.register);
AdminRouter.post("/login", AdminAuthController.login);

export default AdminRouter;
