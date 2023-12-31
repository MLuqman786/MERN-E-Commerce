import sequelize from "../db/config.js";
import { DataTypes } from "sequelize";

const AdminModel = sequelize.define("admin", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    // unique:true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default AdminModel;
