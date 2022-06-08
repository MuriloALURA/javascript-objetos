class Cliente{
    constructor (nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const murilo = new Cliente("Murilo", "murilo@email.com","341232152344", 100)

murilo.exibirSaldo()

console.log(murilo)