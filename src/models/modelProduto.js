export class Produto {
    constructor(id, nome, arq2d, arq3d, desc, imagem, dataIns, dataAlt){
        this.id = id;
        this.nome = nome;
        this.arq2d = arq2d;
        this.arq3d = arq3d;
        this.desc = desc;
        this.imagem = imagem;
        this.dataIns = dataIns;
        this.dataAlt = dataAlt;
    }
}

export const destroyProd = (id) => {
    const produto = FindByPk(id)
    if(!produto) {
        return false
    }
    const index = dbProduto.indexOf(produto)
    dbProduto.splice(index, 1)
    return true
}

export const FindByPk = (id) => {
    return dbProduto.find(produto=> produto.id === id)
}

export const updateProd = (id,produto) => {
    const produtoToUpdate = FindByPk(id)
    if(!produtoToUpdate) {
        return false
    }

    const index = dbProduto.indexOf(produtoToUpdate)
    dbProduto[index] = produto
    return true
}

 export const getProduto = () => {
    return dbProduto
}

export const getProdutoCount = () => {
    return dbProduto.length 
}

export const createProduto = (produto) => {
    dbProduto.push(produto)
}

 export const dbProduto = [
    new Produto(1,'nome', 'arq2d', 'arq3d', 'desc', 'imagem', 'dataIns', 'dataAlt'),
 ]
