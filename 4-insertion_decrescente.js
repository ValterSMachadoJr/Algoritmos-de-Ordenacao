/**
 * Ordena um array em ordem decrescente usando o algoritmo Insertion Sort.
 * @param {number[]} arr - O array a ser ordenado.
 * @returns {number[]} - O array ordenado em ordem decrescente.
 */
function insertionSortDescending(arr) {
    let n = arr.length;
    // Começa a partir do segundo elemento (índice 1) até o final do array
    for (let i = 1; i < n; i++) {
        let key = arr[i];  // O valor atual a ser inserido na parte ordenada
        let j = i - 1;     // Índice do último elemento na parte ordenada
        // Move os elementos da parte ordenada que são menores que a chave
        // para uma posição à frente para criar espaço para a chave
        while (j >= 0 && arr[j] < key) {
            arr[j + 1] = arr[j];  // Desloca o elemento para a direita
            j--;                  // Move o índice para a esquerda
        }
        // Insere a chave na posição correta
        arr[j + 1] = key;
    }
    return arr;
}
// Exemplo de uso:
let arrayDesc = [64, 25, 12, 22, 11];
console.log("Array original:", arrayDesc);
console.log("Array ordenado em ordem decrescente:", insertionSortDescending(arrayDesc));
