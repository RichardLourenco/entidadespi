import { getFerramenta } from "../models/modelFerramenta.js";

class FerramentaController {
    static list(req,res){
        res.json(getFerramenta)
    }
    static find(req,param){
        res.json(req.param)
    }
}

export default FerramentaController