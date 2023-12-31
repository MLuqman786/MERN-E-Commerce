import { Router } from "express";
import AdminRouter from "./admin/AdminRouter.js";
import ProductRouter from "./product/ProductRouter.js";
import OrderRouter from "./order/OrderRouter.js";

const AllRoutes = Router();

AllRoutes.use("/admin", AdminRouter);
AllRoutes.use("/order", OrderRouter);
AllRoutes.use("/product", ProductRouter);

export default AllRoutes;
