import express from 'express'
import MaquinarioController from '../controllers/controllerMaquinario.js'

const MaquinarioRouter = express.Router()
MaquinarioRouter.get("/",MaquinarioController.list)
MaquinarioRouter.get("/Maquinarios",MaquinarioController.find)

export default MaquinarioRouter