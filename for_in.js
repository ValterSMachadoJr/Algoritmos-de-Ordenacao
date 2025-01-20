const pessoa = { nome: "Ana", idade: 25 };
for (let chave in pessoa) {
  console.log(chave);
}

const carro = { marca: "Fusca", ano: 1970, cor: "azul" };

for (let CHAVE in carro) {
  console.log(CHAVE + ": " + carro[CHAVE]);
}

console.log(`A marca é ${carro["marca"]}`);
