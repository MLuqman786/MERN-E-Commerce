import sequelize from "../db/config.js";
import { DataTypes } from "sequelize";

const ProductModel = sequelize.define("product", {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productStock: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productPrice: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default ProductModel;
