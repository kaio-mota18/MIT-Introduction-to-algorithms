// Este algoritmo é uma demonstração de Ordenação por Inserção. O intuito é que se organize N elementos de um array sempre comparando com o elemento a sua esquerda SENDO QUE A[a¹, a²...an] a¹ < a² < an.
// Como em uma mão de baralho, a última carta pega (o último input, será comparado com os elementos à esquerda até que a condição seja satisfeita).
// Por enquanto, não está sendo tratado sobre a questão performática e nem está sendo considerado tempo de execução.

console.log('Algoritmo de ordenação!')

const notOrdered = [12, 23, 54, 3, 987, 0]

function insertionSort(lista) {
  // A propriedade length retorna o tamanho do array. Entretanto, como estamos com vetores é preciso relembrar que um vetor opera desde a posição 0. Ou seja, devemos manter nosso loop menor que o tamanho do array.
  const n = lista.length

  // A chave é o elemento do array original antes de ser ordenado.
  let chave
  let j

  for (let i = 1; i < n; i++) {
    // Sempre estaremos comparando o elemento novo com o elemento da esquerda. Logo, o i recebe 1 'posição 1' e vamos comparar com o elemento a sua esquerda i-1
    chave = lista[i]
    j = i - 1

    while (j >= 0 && lista[j] > chave) {
      lista[j + 1] = lista[j]
      j = j - 1
    }
    lista[j + 1] = chave
  }
}

var lista = notOrdered
console.log(lista)
insertionSort(lista)
console.log(lista)
