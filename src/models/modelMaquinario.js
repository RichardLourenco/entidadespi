export class Maquinario {
    constructor(id, nome, idMaquinario, dataIns, dataAlt){
        this.id = id;
        this.nome = nome;
        this.idMaquinario = idMaquinario;
        this.dataIns = dataIns;
        this.dataAlt = dataAlt;
    }
}

export const getMaquinario = () => {
    return dbMaquinario
}
 
export const dbMaquinario = [
    new Maquinario (1,'nome','idMaquinario','dataIns','dataAlt')
]