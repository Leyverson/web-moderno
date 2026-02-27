const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota)) // O map vai criar um novo array com as notas dos alunos, ou seja, [7.3, 9.2, 9.8, 8.7]
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) // O zero é o valor inicial do acumulador, ou seja, o valor que ele vai ter na primeira execução da função. Se não for passado, o acumulador vai ser o primeiro elemento do array e a iteração começa no segundo elemento.

console.log(resultado)