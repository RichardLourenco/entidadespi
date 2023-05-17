import express from 'express';
import ProdutoRouter from './src/routes/rota.js';


const app = express()
app.use(express.json())

app.use('/produtos', ProdutoRouter)

app.listen(3000, () => console.log('API rodando na porta 3000'))