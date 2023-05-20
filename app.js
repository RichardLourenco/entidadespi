import express from 'express';
import ProdutoRouter from './routes/rotaProduto.js';
import MaquinarioRouter from './routes/rotaMaquinario.js';
import FerramentaRouter from './routes/rotaFerramenta.js';


const app = express()
const port = 3000
app.use(express.json())

app.use('/Produtos', ProdutoRouter)
app.use('/Maquinarios', MaquinarioRouter)
app.use('/Ferramentas', FerramentaRouter)

app.listen(port, () => console.log(`API rodando na porta ${port}`))