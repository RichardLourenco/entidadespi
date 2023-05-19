import express from 'express'
import FerramentaController from '../controllers/controllerFerramenta.js'

const FerramentaRouter = express.Router()
FerramentaRouter.get("/",FerramentaController.list)
FerramentaRouter.get("/Ferramentas",FerramentaController.find)

export default FerramentaRouter