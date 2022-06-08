function Cliente(nome, cpf, email, saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const murilo = new Cliente("Murilo","341232152344", "murilo@email.com", 100)

console.log(murilo)