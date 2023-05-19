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

 export const getProduto = () => {
    return dbProduto
 }

 export const dbProduto = [
    new Produto(1,'nome','descricao','dataIns'),
 ]
