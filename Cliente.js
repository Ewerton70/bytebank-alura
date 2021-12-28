export class Cliente {
    constructor(nome, cpf, senha) {
        this.nome = nome
        this._cpf = cpf
        this._senha = senha
    }
    autenticar() {
        return true
    }
    get cpf() {
        this._cpf
        return this._cpf
    }
}