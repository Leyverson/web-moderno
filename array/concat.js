const filhas = ['Valeska', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos) // concat não altera os arrays originais

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))