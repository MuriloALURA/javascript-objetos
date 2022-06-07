const cliente = {
    nome:'Murilo',
    idade: 22,
    cpf: '123454632423',
    email: 'murilo@email.com'
}

const chaves = ["nome", "idade", "cpf", "email"]

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["nome"])