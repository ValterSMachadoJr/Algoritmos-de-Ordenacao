const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];
const todosOsNumeros = [...numeros1, ...numeros2];

console.log(todosOsNumeros); // Saída: [1, 2, 3, 4, 5, 6]


//A sintaxe de espalhamento também é útil para criar uma cópia rasa de um array.
const sala1 = ['victor', 'lucas', 'Renan', 'ana', 'Valter']
const sala2 = ['Renato', 'Gilson', 'Ana vitória']

const salareunida = [...sala1, ...sala2];
console.log(salareunida);

const sala1copia = [...sala1]
console.log(sala1copia)