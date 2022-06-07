const cliente = {
    nome:'Murilo',
    idade: 22,
    cpf: '123454632423',
    email: 'murilo@email.com',
    fones: ["2304-0393", "2508-9409"],
    dependentes : [
        {
        nome: 'Barbara Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011'},
        {
        nome: 'Samia Maria',
        parentesco: 'filha',
        dataNasc: '04/01/2014'
        }
    ],
    saldo: 100,
    deposito:function(valor){
        this.saldo += valor
    }
}

let relatorio = "";

for (let info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue 
    }else{
        relatorio += `
        ${info}: ${cliente[info]}
        `
    }
}

console.log(relatorio)
