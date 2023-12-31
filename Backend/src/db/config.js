import { Sequelize } from "sequelize";
const envData = process.env;

const sequelize = new Sequelize(
  envData.DB_NAME,
  envData.DB_USER,
  envData.DB_PASSWORD,
  {
    host: envData.DB_HOST,
    port: envData.DB_PORT,
    dialect: envData.DB_DIALECT,
    logging: false,
  }
);

export const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.error("Failed to connect database", error);
  }
};

export default sequelize;
