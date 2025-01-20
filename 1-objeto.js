const listaCPFs = [1111111, 22222, 3333];

const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

//console.log(informacoesPessoa);


const objetoPessoa = {
  idade: 32,
  nome: "Jose",
};
//console.log(objetoPessoa)


const pessoa = {
   nome: "Valter",
   idade: 44,
   fone: ["44-98404-4533", 44999750395]
}
console.log(pessoa["nome"])
console.log(pessoa.nome)
console.log(`${pessoa.nome} tem os seguintes telefones ${pessoa.fone}`)

let carro = {
  tipomotor : "ELÉTRICO"
}

carro.nacional = function(){
  return "O tipo do motor do meu carro é " + this.tipomotor

}

console.log(carro.nacional())
