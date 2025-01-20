let pessoas = [
    { nome: "Maria", idade: 18 },
    { nome: "João", idade: 25 },
    { nome: "Ana", idade: 22 }
];

let primeiraMaiorQue20 = pessoas.find(
     (pessoa) => {
      return pessoa.idade >= 25
     }
);
console.log(primeiraMaiorQue20); // Saída: { nome: "João", idade: 25 }
//O método find() retorna o primeiro elemento do array que satisfaz a condição fornecida. Se nenhum elemento 
//for encontrado, ele retorna undefined.