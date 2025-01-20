const pessoas = [
    { nome: 'Ana', idade: 28 },
    { nome: 'João', idade: 34 },
    { nome: 'Luís', idade: 22 },
    { nome: 'Maria', idade: 30 }
  ];

    
  // Ordenar por idade, do mais jovem para o mais velho
  pessoas.sort((a, b) => a.idade - b.idade);
  
  console.log(pessoas);

 //O método sort realiza o processo de comparação e troca de elementos até que o array
 // esteja completamente ordenado. 
 //A quantidade de vezes que ele faz isso pode variar dependendo do algoritmo 
 // de ordenação utilizado pelo JavaScript e da condição inicial do array.
  