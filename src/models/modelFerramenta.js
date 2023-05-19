export class Ferramenta {
    constructor(id, idFerramenta, nome, quantidade, arq2d, arq3d, dataIns, dataAlt){
        this.id = id;
        this.idFerramenta = idFerramenta;
        this.nome = nome;
        this.quantidade = quantidade;
        this.arq2d = arq2d;
        this.arq3d = arq3d;
        this.dataIns = dataIns;
        this.dataAlt = dataAlt;
    }
}

export const getFerramenta = () => {
    return dbFerramenta
}

export const dbFerramenta = [
    new Ferramenta (1,'idFerramenta','nome','quantidade','arq2d','arq3d','dataIns','dataAlt')
]