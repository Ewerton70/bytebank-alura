/**
 * Ser autenticavel significa ter o método autenticar
 */

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavavel(autenticavel)) {
            return autenticavel.autenticar(senha)
        }
        return false
    }
    static ehAutenticavavel(autenticavel) {
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function
    }
} 