import { DataTypes } from "sequelize";
import sequelize from "../db/config.js";
import ProductModel from "./ProductModel.js";

const CategoryModel = sequelize.define("categoryProduct", {
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

CategoryModel.hasMany(ProductModel);
ProductModel.hasOne(CategoryModel);

export default CategoryProductModel;
