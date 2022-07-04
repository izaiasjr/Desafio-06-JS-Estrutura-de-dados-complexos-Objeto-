// Crie um objeto que receba ao menos três propriedades sobre você.
let sobreMim ={
    nome: "Izaias",
    idade: 27,
    cursoProgramação: true
}
// Adicione uma nova propriedade sem alterar seu objeto inicial.
sobreMim.time ="flamengo";

console.log(sobreMim);
// Remova uma propriedade desse objeto.
delete sobreMim.idade;

console.log(sobreMim);
//Mostre no console todas as propriedades desse objeto.
console.log(sobreMim);
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
const cadastro = [
    {
        nome:"luiz",
        idade:22,
        telefone: 2199999
        amigos: ["joão", "gabriel", "junior", "erick", ]
    },
    {
        nome:"jorge",
        idade:26,
        telefone: 2199988
        amigos: ["joão", "felipe", "junior", "gabi", ]
    },
    {
        nome:"adriel",
        idade:21,
        telefone: 2144988
        amigos: ["joão", "felipe", "izabel", "erick", ]
    },
    {
        nome:"leandro",
        idade:30,
        telefone: 2155268
        amigos: ["joão", "felipe", "junior", "erick", ]
    },
    {
        nome:"ronaldo",
        idade:30,
        telefone: 2122458
        amigos: ["joão", "felipe", "junior", "erick", ]
    },
];
// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[0]);
console.log(cadastro[2].amigos[0]);
console.log(cadastro[3].amigos[0]);
console.log(cadastro[4].amigos[0]);