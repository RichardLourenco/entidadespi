import { createProduto,FindByPk, Produto ,getProduto, getProdutoCount, destroyProd, updateProd } from "../models/modelProduto.js";

class ProdutoController {
    static list(req,res){
        res.json(getProduto())
    }
    static find(req,res){
        res.json(req,param)
    }

    static createProduto(req,res){
        const {nome, arq2d, arq3d, desc, imagem, dataIns, dataAlt} = req.body
        if(!nome || !arq2d || !arq3d || !desc || !imagem || !dataIns || !dataAlt){
            res.status(400).json({ error: 'Nome, Arq2D, Arq3D, Descrição, Imagem, DataIns, DataAlt são obrigatórios'})
            return
        }
        const id = getProdutoCount() + 1
        const produto = new Produto (id, nome, arq2d, arq3d, desc, imagem, dataIns, dataAlt)
        createProduto(produto)
        res.json(produto)
    }

    static getProdutoById(req, res) {
        const id = parseInt(req.params.id)
        const produto = FindByPk(id)
        if(!produto){
            res.status(404).json({error: 'Produto não encontrado'})
        }
        res.json(produto)
    }
    static destroyProduto(req,res) {
        const id = parseInt(req.params.id)
        const produto = FindByPk(id)
        if(!produto){
            res.status(404).json({error: "Produto não encontrado"})
            return
        }
        destroyProd(id)
        res.json({message: "Produto removido com sucesso"})
    }

    static updateProduto(req,res) {
        const id = parseInt(req.params.id)
        const produto = FindByPk(id)
        if(!produto) {
            res.status(404).json({error: "Produto não encontrado"})
            return
        }

        const { nome, arq2d, arq3d, desc, imagem, dataIns, dataAlt} = req.body
        if(!nome || !arq2d || !arq3d || !desc || !imagem || !dataIns || !dataAlt) {
            res.status(400).json({error: "O nome, Arquvivo 2D, Arquivo 3D, Descrição, Imagem, Data de Inscrição, Data de Alteração"})
            return
        }
        produto.nome = nome,
        produto.arq2d= arq2d
        produto.arq3d = arq3d
        produto.desc = desc
        produto.imagem = imagem
        produto.dataIns = dataIns
        produto.dataAlt = dataAlt
        updateProd(id.produto)
        res.json(produto)
    }
}

export default ProdutoController