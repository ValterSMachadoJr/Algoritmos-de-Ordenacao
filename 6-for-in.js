let pessoa = {
    nome: "Maria",
    idade: 25,
    cidade: "São Paulo"
};
//chave é a variável que assume a propriedade do objeto a cada
//iteração 
//A variável chave irá assumir o nome de cada propriedade
// (ou seja, nome, idade e cidade) a cada iteração.
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}

