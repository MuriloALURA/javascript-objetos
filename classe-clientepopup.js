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

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const murilo = new ClientePoupanca("Murilo", "murilo@email.com","341232152344", 100, 200)

console.log(murilo)

murilo.depositar(50)
murilo.depositarPoupanca(50)

console.log(murilo)