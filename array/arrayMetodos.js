const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento no final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento no início do array
console.log(pilotos)

// splice pode adicionar e remover elementos do array

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // a partir do índice 2, não remove nenhum elemento e adiciona os elementos informados
console.log(pilotos)

// remover
pilotos.splice(3, 1) // a partir do índice 3, remove 1 elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // a partir do índice 2, retorna os elementos restantes do array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // a partir do índice 1, retorna os elementos até o índice 4 (index 4 não é incluído)
console.log(algunsPilotos2)