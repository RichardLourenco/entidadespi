import { getProduto } from "../models/modelProduto.js";

class ProdutoController {
    static list(req,res){
        res.json(getProduto())
    }
    static find(req,res){
        res.json(req.param)
    }
}

export default ProdutoController