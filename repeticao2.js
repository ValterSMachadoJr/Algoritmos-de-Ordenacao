const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};
cliente.enderecos = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];
for (let chave in cliente) {
  //  console.log(chave) // propriedade
  console.log(cliente[chave]); // mostra valor da chave
}
