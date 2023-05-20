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

export const destroyFer = (id) => {
    const ferramenta = FindByPk(id)
    if(!ferramenta) {
        return false
    }
    const index = dbFerramenta.indexOf(ferramenta)
    dbFerramenta.splice(index, 1)
    return true
}

export const FindByPk = (id) => {
    return dbFerramenta.find(ferramenta=> ferramenta.id === id)
}

export const updateFer = (id,ferramenta) => {
    const ferramentaToUpdate = FindByPk(id)
    if(!ferramentaToUpdate) {
        return false
    }

    const index = dbFerramenta.indexOf(ferramentaToUpdate)
    dbFerramenta[index] = ferramenta
    return true
}

 export const getFerramenta = () => {
    return dbFerramenta
}

export const getFerramentaCount = () => {
    return dbFerramenta.length 
}

export const createFerramenta = (ferramenta) => {
    dbFerramenta.push(ferramenta)
}

 export const dbFerramenta = [
    new Ferramenta(1,'IdFerramenta', 'nome', 'quantidade','arq2d' , 'arq3d', 'dataIns', 'dataAlt'),
 ]
