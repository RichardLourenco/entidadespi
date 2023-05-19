import { getMaquinario } from "../models/modelMaquinario.js";

class MaquinarioController {
    static list(req,res){
        res.json(getMaquinario())
    }
    static find(req,res){
        res.json(req.param)
    }
}

export default MaquinarioController