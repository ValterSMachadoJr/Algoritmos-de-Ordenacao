function buscaBinaria(lista, elementoProcurado) {
    let inicio = 0;
    
    let fim = lista.length - 1;
    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);
        if (lista[meio] === elementoProcurado) {
            return meio;  // Retorna a posição do elemento encontrado
            
        } else if (lista[meio] < elementoProcurado) {
            inicio = meio + 1;  // Procura na metade superior da lista
           
        } else {
            fim = meio - 1;  // Procura na metade inferior da lista
            
        }
    }
    return -1;  // Retorna -1 se o elemento não for encontrado
}
// Exemplo de uso
let contador =0;
const listaOrdenada = [1, 3, 5, 7, 9, 11];
const elemento = parseInt(prompt("Informe um número: "));

const resultado = buscaBinaria(listaOrdenada, elemento);

while(contador <=5){
    if (resultado !== -1) {
        console.log(`Elemento encontrado na posição ${resultado}.`);
        document.write(`Elemento encontrado na posição ${resultado}.` );
       break
    } else {
        console.log("Elemento não encontrado.");
      //  document.write("Elemento não encontrado." );
        contador++
        console.log(contador)
        const listaOrdenada = [1, 3, 5, 7, 9, 11];
        const elemento = parseInt(prompt("Informe um número: "));
        const resultado = buscaBinaria(listaOrdenada, elemento);
        if(contador===6){
            document.write("Você perdeu!!!" );
        }
    }
}

