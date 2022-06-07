const cliente = {
    nome:'Murilo',
    idade: 22,
    cpf: '123454632423',
    email: 'murilo@email.com',
    fones: ["2304-0393", "2508-9409"],
    dependentes : [{
        nome: 'Barbara Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
    }]
}

cliente.dependentes.push({
    nome: 'Samia Maria',
    parentesco: 'filha',
    dataNasc: '04/01/2014'
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014")

console.log(filhaMaisNova[0].nome)