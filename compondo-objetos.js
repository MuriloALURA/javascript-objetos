const cliente = {
    nome:'Murilo',
    idade: 22,
    cpf: '123454632423',
    email: 'murilo@email.com',
    fones: ["2304-0393", "2508-9409"]
}

cliente.dependentes = {
    nome: 'Barbara',
    parentesco: 'filha',
    dataNasc: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = 'Barbara Silva'

console.log(cliente)