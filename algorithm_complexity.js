// Este documento contém uma análise sobre a complexidade de algoritmos a partir tanto da análise intuitiva quanto da notação assintótica. O estudo é baseado no livro "Introduction to Algorithms 3rd Edition"

// O estudo começa analisando um algoritmo que inverte uma dada lista. Vamos observar a partir da notação intuitiva qual a complexidade de espaço e tempo. Cabe salientar que quando não é especificado qual o tipo de complexidade daquele algoritmo, pode-se deduzir que se trata da complexidade de tempo.

var listaDesordenada = [1, 5, 13, 45, 199, 24]

function inverterLista(lista) {
  // A começar pela análise da compelxidade de espaço. Precisa-se contar o número de variáveis, ou seja, endereços de memória para acessarmos um determinado valor.

  // Sobre a complexidade de tempo, usaremos a noção de operações primitivas. O que quer dizer que não necessariamente faremos um estudo baseado na decomposição dos steps que uma linha de comando exige a máquina fazer. Para este estudo, basta ter uma noção aproximada.

  let tamanho = lista.length // 1 var  1 OP
  let limite = tamanho - 1 / 2 // 2 var    2 OP

  for (let i = 0; i < limite; i++) {
    // 3 var,
    let aux = lista[i] // 4 var
    lista[i] = lista[tamanho - i]
    lista[tamanho - i] = aux
    // Dentro do laço for nós temos 4 Operações Primitivas. Linha 13 com o incremento e comparação de i, linha 14, 15 e 16.
    // Podemos chegar nas seguintes expressões matemáticas que calculam tanto a complexidade de tmepo quanto espaço:
    // 4 + N(lista) == Complexidade de espaço, sendo N(lista) o  valor que varia conforme o tamanho da entrada.
    // 2 + 4(N/2) ==   Complexidade de tempo, sendo N/2 o equivalente ao tamanho da lista dividido por 2 que dá o valor de limite.
  }
  return lista
}

console.log('Invertendo lista')
console.log(listaDesordenada)
inverterLista(listaDesordenada)
console.log(listaDesordenada)

// Passando da notação intuitiva 2 + 4(N/2), que pode ser simplificada para 2 + 2N, vamos fazer a análise assintótica.
// Na notação assintótica, busca-se limitar o termo dominante, o qual pode ser calculado pelo limite. De maneira simplificada, o termo dominante é aquele que quando comparado com os outros torna-se o único realmente importante no que tange à análise de tempo. Exemplo: no caso da notação 2 + 2n, quanto maior for minha entrada em N, menos relevante é tanto a soma de 2 quanto a multiplicação por 2. Logo o termo dominante pode ser anotado por [O(N)], onde N é o elemento que determina o gráfico da minha função.
