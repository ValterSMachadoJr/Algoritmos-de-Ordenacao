// Exemplo de uso
const array = [38, 27, 43, 3, 9, 82, 10];
const arrayOrdenado = ordenacaoMerge(array);
// Função principal que ordena um array usando o algoritmo Merge Sort
function ordenacaoMerge(array) {
    // Se o array tem 1 ou 0 elementos, já está ordenado
    if (array.length <= 1) {
        return array;
    }

    // Encontra o índice do meio do array
    const meio = Math.floor(array.length / 2);

    // Divide o array em duas metades
    const esquerda = array.slice(0, meio);
    const direita = array.slice(meio);

    // Chama recursivamente ordenacaoMerge nas duas metades
    return mesclar(ordenacaoMerge(esquerda), ordenacaoMerge(direita));
}

// Função que combina duas metades ordenadas em um único array ordenado
function mesclar(esquerda, direita) {
    let resultado = []; // Array para armazenar os elementos ordenados
    let indiceEsquerda = 0; // Índice para percorrer a metade esquerda
    let indiceDireita = 0; // Índice para percorrer a metade direita

    // Enquanto houver elementos em ambas as metades
    while (indiceEsquerda < esquerda.length && indiceDireita < direita.length) {
        // Compara os elementos das duas metades e adiciona o menor ao resultado
        if (esquerda[indiceEsquerda] < direita[indiceDireita]) {
            resultado.push(esquerda[indiceEsquerda]); // Adiciona o elemento da esquerda
            indiceEsquerda++; // Move para o próximo elemento da esquerda
        } else {
            resultado.push(direita[indiceDireita]); // Adiciona o elemento da direita
            indiceDireita++; // Move para o próximo elemento da direita
        }
    }

    // Adiciona os elementos restantes da metade esquerda (se houver)
    while (indiceEsquerda < esquerda.length) {
        resultado.push(esquerda[indiceEsquerda]);
        indiceEsquerda++;
    }

    // Adiciona os elementos restantes da metade direita (se houver)
    while (indiceDireita < direita.length) {
        resultado.push(direita[indiceDireita]);
        indiceDireita++;
    }

    return resultado; // Retorna o array combinado e ordenado
}


console.log(arrayOrdenado); // Saída: [3, 9, 10, 27, 38, 43, 82]
