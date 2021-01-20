import express from "express";
import bodyParser from "body-parser";
import router from "./routes/users.js";
const app = express();

app.use(bodyParser.json());

app.use("/users", router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);
