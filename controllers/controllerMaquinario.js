import {  createMaquinario,Maquinario, destroyMaq, getMaquinario, updateMaq, getMaquinarioCount, FindByPk } from "../models/modelMaquinario.js";

class MaquinarioController {
    static list(req,res){
        res.json(getMaquinario())
    }

    static createMaquinario(req,res){
        const {nome, arq2d, arq3d, desc, imagem, dataIns, dataAlt} = req.body
        if(!nome || !arq2d || !arq3d || !desc || !imagem || !dataIns || !dataAlt){
            res.status(400).json({ error: 'Nome, IdMaquinario, DataIns, DataAlt são obrigatórios'})
            return
        }
        const id = getMaquinarioCount() + 1
        const maquinario = new Maquinario (id, nome, arq2d, arq3d, desc, imagem, dataIns, dataAlt)
        createMaquinario(maquinario)
        res.json(maquinario)
    }

    static getMaquinarioById(req, res) {
        const id = parseInt(req.params.id)
        const maquinario = FindByPk(id)
        if(!maquinario){
            res.status(404).json({error: 'Maquinario não encontrado'})
        }
        res.json(maquinario)
    }
    static destroyMaquinario(req,res) {
        const id = parseInt(req.params.id)
        const maquinario = FindByPk(id)
        if(!maquinario){
            res.status(404).json({error: "Maquinario não encontrado"})
            return
        }
        destroyMaq(id)
        res.json({message: "Maquinario removido com sucesso"})
    }

    static updateMaquinario(req,res) {
        const id = parseInt(req.params.id)
        const maquinario = FindByPk(id)
        if(!maquinario) {
            res.status(404).json({error: "Maquinario não encontrado"})
            return
        }

        const { nome, arq2d, arq3d, desc, imagem, dataIns, dataAlt} = req.body
        if(!nome || !arq2d || !arq3d || !desc || !imagem || !dataIns || !dataAlt) {
            res.status(400).json({error: "O nome, Arquvivo 2D, Arquivo 3D, Descrição, Imagem, Data de Inscrição, Data de Alteração"})
            return
        }
        maquinario.nome = nome,
        maquinario.arq2d= arq2d
        maquinario.arq3d = arq3d
        maquinario.desc = desc
        maquinario.imagem = imagem
        maquinario.dataIns = dataIns
        maquinario.dataAlt = dataAlt
        updateMaq(id.maquinario)
        res.json(maquinario)
    }
}

export default MaquinarioController