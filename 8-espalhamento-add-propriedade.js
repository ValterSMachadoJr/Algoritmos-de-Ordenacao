const pessoa = { nome: "Maria", idade: 25 };
const novaPessoa = { ...pessoa, cidade: "São Paulo" };

console.log(novaPessoa); // Saída: { nome: "Maria", idade: 25, cidade: "São Paulo" }
