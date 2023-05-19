import express from 'express'
import ProdutoController from '../controllers/controllerProduto.js'

 const ProdutoRouter = express.Router()
ProdutoRouter.get('/', ProdutoController.list)
ProdutoRouter.get('/Produtos',ProdutoController.find)

export default ProdutoRouter
