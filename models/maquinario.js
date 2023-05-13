const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const MaquinarioSchema = new Schema({
  nome: { type: String, required: true, maxLength: 100 },
  produto: { type: mongoose.Schema.Types.ObjectId, ref:"produto", required:true },
  dataIns: { type: Date, default:Date.now },
  dataAlt: { type: Date },

});

const MaquinarioModel = mongoose.model("MaquinarioModel", MaquinarioSchema);