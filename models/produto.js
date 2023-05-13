const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const ProdutoSchema = new Schema({
  nome: { type: String, required: true, maxLength: 100 },
  arq2d: { type: String, required: false},
  arq3d: { type: String, required: false},
  desc: { type: String, required: true, maxLength: 2000 },
  imagem: { type: String, required: false },
  dataIns: { type: Date, default:Date.now },
  dataAlt: { type: Date },
});

const ProdutoModel = mongoose.model("ProdutoModel", ProdutoSchema);