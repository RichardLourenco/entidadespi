import express from 'express';
import ProdutoRouter from './src/routes/rotaProduto.js';
import MaquinarioRouter from './src/routes/rotaMaquinario.js';
import FerramentaRouter from './src/routes/rotaFerramenta.js';


const app = express()
const port = 3000
app.use(express.json())

app.use('/Produtos', ProdutoRouter)
app.use('/Maquinario', MaquinarioRouter)
app.use('/Ferramentas', FerramentaRouter)

app.listen(port, () => console.log(`API rodando na porta ${port}`))