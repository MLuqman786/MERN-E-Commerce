import { Router } from "express";
import ProductController from "../../controller/Product/ProductController.js";

const ProductRouter = Router();

ProductRouter.post("/register", ProductController.create);

export default ProductRouter;
