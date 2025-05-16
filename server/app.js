const express = require("express");
const mongoose = require("mongoose");
const Garanty = require("./schemas/Garanty");
const User = require("./schemas/User");
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = 5000;

const db = "mongodb://localhost:27017/garantyx`";

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("Connected to DB"))
  .catch((error) => console.log(error));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});
