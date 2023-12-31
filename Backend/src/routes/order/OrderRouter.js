import { Router } from "express";
import OrderController from "../../controller/Order/OrderController.js";

const OrderRouter = Router();

OrderRouter.post("/add", OrderController.create);

export default OrderRouter;
