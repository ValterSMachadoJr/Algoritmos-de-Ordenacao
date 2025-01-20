//Suponha que temos um array de números e queremos encontrar o primeiro número maior que 10.

const numbers = [4, 9, 16, 25, 36];

// Encontrar o primeiro número maior que 10
const result = numbers.find(num => num > 10);

console.log(result); // 16

//O método find é útil para localizar um único elemento em um array com base em uma condição.
//Ele retorna o primeiro elemento que atende à condição ou undefined se nenhum elemento 
//corresponder.
