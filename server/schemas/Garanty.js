const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const garantySchema = new Schema({
  tokenAdress: String,
});

const Garanty = mongoose.model("Garanty", garantySchema);

module.exports = Garanty;
