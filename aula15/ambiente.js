let num = [5, 8, 2, 9, 3]
num.push(1)  // Adiciona o valor ao array em uma nova posição
num.sort()  // Ordena os elementos do array em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4) // Localiza a posição do valor 4 no array, caso o valor não exista o console retorna -1
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else{
console.log(`O valor 8 está na posição ${pos}`)
}