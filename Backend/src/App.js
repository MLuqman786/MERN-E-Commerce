import "dotenv/config.js";

import express from "express";
import sequelize, { connectDb } from "./db/config.js";
import dbInit from "./db/init.js";
import AllRoutes from "./routes/main.js";
import SequelizeStore from "connect-session-sequelize";
import session from "express-session";
import AuthenticateMiddleware from "./middleware/AuthenticateMiddleware.js";
import cors from "cors";

const PORT = process.env.PORT;
// console.log("thi is env ======", PORT);
const app = express();

const mySequelizeStore = SequelizeStore(session.Store);

const mySequelizeStore1 = new mySequelizeStore({
  db: sequelize,
});

app.use(
  session({
    secret: "tgyha?sv@as!#bc'||abufqhfn",
    store: mySequelizeStore1,
    saveUninitialized: false,
    resave: true,
    proxy: false,
  })
);
mySequelizeStore1.sync();

connectDb();
dbInit()
  .then(() => console.log("DB Successfully Sync"))
  .catch((error) => console.log("DB Not Sync ", error));

app.use(express.json());
app.use(cors());

app.use("/", AllRoutes);

app.post("/", AuthenticateMiddleware, (req, res) => {
  return res.json({
    message: "Welcome to the API",
  });
});

// app.get("/", (req, res) => {
//   res.send({ message: "Welcome to the API / server is ready" });
// });

app.listen(PORT, (err) => {
  if (err) {
    console.log("server not established", err);
  } else {
    console.log(`server is listening at http://localhost:${PORT}`);
  }
});
