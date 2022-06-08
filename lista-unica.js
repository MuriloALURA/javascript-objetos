const clientes = [
    {
    nome:'Murilo',
    cpf: '123454632423',
    dependentes : [{
        nome: 'Barbara Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
        },
        {
        nome: 'Samia Maria',
        parentesco: 'filha',
        dataNasc: '04/01/2014'
        }],
    },
    {
        nome:'Juliana',
        cpf: '4794371923',
        dependentes : [{
            nome: 'Sophia',
            parentesco: 'filha',
            dataNasc: '30/08/2020'
        }],
    }
]
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)
