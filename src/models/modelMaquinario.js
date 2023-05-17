export class Maquinario {
    constructor(id, nome, idProduto, dataIns, dataAlt){
        this.id = id;
        this.nome = nome;
        this.idProduto = idProduto;
        this.dataIns = dataIns;
        this.dataAlt = dataAlt;
    }
}

export const getMaquinario = () => {
    return dbMaquinario
}
 
export const dbMaquinario = [
    new Maquinario = ('id','nome','idProduto','dataIns','dataAlt')
]