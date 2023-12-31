import AdminModel from "../model/AdminModel.js";
import OrderModel from "../model/OrderModel.js";
import ProductModel from "../model/ProductModel.js";

const dbInit = async () => {
  await AdminModel.sync({
    alter: true,
    force: false,
  });
  await OrderModel.sync({
    alter: true,
    force: false,
  });
  await ProductModel.sync({
    alter: true,
    force: false,
  });
};

export default dbInit;
