export class Maquinario {
    constructor(id, nome, idMaquinario, dataIns, dataAlt){
        this.id = id;
        this.nome = nome;
        this.idMaquinario = idMaquinario;
        this.dataIns = dataIns;
        this.dataAlt = dataAlt;
    }
}

export const destroyMaq = (id) => {
    const maquinario = FindByPk(id)
    if(!maquinario) {
        return false
    }
    const index = dbMaquinario.indexOf(maquinario)
    dbMaquinario.splice(index, 1)
    return true
}

export const FindByPk = (id) => {
    return dbMaquinario.find(maquinario=> maquinario.id === id)
}

export const updateMaq = (id,maquinario) => {
    const maquinarioToUpdate = FindByPk(id)
    if(!maquinarioToUpdate) {
        return false
    }

    const index = dbMaquinario.indexOf(maquinarioToUpdate)
    dbMaquinario[index] = maquinario
    return true
}

 export const getMaquinario = () => {
    return dbMaquinario
}

export const getMaquinarioCount = () => {
    return dbMaquinario.length 
}

export const createMaquinario = (maquinario) => {
    dbMaquinario.push(maquinario)
}

export const dbMaquinario = [
    new Maquinario (1,'nome','idMaquinario','dataIns','dataAlt')
]