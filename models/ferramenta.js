const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const FerramentaSchema = new Schema({
    nome: { type: String, required: true, maxLength: 100 },
    maquinario: { type: mongoose.Schema.Types.ObjectId, ref:"maquinario", required:true },
    quantidade: { type: Number },
    arq2d: { type: String, required: false},
    arq3d: { type: String, required: false},
    dataIns: { type: Date, default:Date.now },
    dataAlt: { type: Date },  
});

const FerramentaModel = mongoose.model("FerramentaModel", FerramentaSchema);