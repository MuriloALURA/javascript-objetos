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

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup)
{
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const barbara = new ClientePoupanca ("Barbara","5234235234", "barbara@email.com", 100, 200)

console.log(barbara)

ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor
}

barbara.depositarPoup(30)
console.log(barbara.saldoPoup)