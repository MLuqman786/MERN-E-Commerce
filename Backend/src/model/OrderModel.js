import { DataTypes } from "sequelize";
import sequelize from "../db/config.js";

const OrderModel = sequelize.define("order", {
  customerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default OrderModel;
