import {  createFerramenta,Ferramenta, getFerramenta, updateFer, getFerramentaCount, FindByPk, destroyFer } from "../models/modelFerramenta.js";

class FerramentaController {
    static list(req,res){
        res.json(getFerramenta())
    }

    static createFerramenta(req,res){
        const {nome, arq2d, arq3d, desc, imagem, dataIns, dataAlt} = req.body
        if(!nome || !arq2d || !arq3d || !desc || !imagem || !dataIns || !dataAlt){
            res.status(400).json({ error: 'Nome, IdFerramenta, DataIns, DataAlt são obrigatórios'})
            return
        }
        const id = getFerramentaCount() + 1
        const ferramenta = new Ferramenta (id, nome, arq2d, arq3d, desc, imagem, dataIns, dataAlt)
        createFerramenta(ferramenta)
        res.json(ferramenta)
    }

    static getFerramentaById(req, res) {
        const id = parseInt(req.params.id)
        const ferramenta = FindByPk(id)
        if(!ferramenta){
            res.status(404).json({error: 'Ferramenta não encontrado'})
        }
        res.json(Ferramenta)
    }
    static destroyFerramenta(req,res) {
        const id = parseInt(req.params.id)
        const ferramenta = FindByPk(id)
        if(!ferramenta){
            res.status(404).json({error: "Ferramenta não encontrado"})
            return
        }
        destroyFer(id)
        res.json({message: "Ferramenta removido com sucesso"})
    }

    static updateFerramenta(req,res) {
        const id = parseInt(req.params.id)
        const ferramenta = FindByPk(id)
        if(!ferramenta) {
            res.status(404).json({error: "Ferramenta não encontrado"})
            return
        }

        const { nome, arq2d, arq3d, desc, imagem, dataIns, dataAlt} = req.body
        if(!nome || !arq2d || !arq3d || !desc || !imagem || !dataIns || !dataAlt) {
            res.status(400).json({error: "O nome, Quantidade, Arquvivo 2D, Arquivo 3D, Data de Inscrição, Data de Alteração"})
            return
        }
        ferramenta.nome = nome,
        ferramenta.arq2d= arq2d
        ferramenta.arq3d = arq3d
        ferramenta.desc = desc
        ferramenta.imagem = imagem
        ferramenta.dataIns = dataIns
        ferramenta.dataAlt = dataAlt
        updateFer(id.ferramenta)
        res.json(ferramenta)
    }
}

export default FerramentaController