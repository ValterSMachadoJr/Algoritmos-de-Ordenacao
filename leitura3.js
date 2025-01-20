// Importa o conteúdo do arquivo 'cliente.json' e armazena na variável 'dados'
const dados = require("./cliente.json");
// Exibe o conteúdo do objeto 'dados' no console
console.log(dados);
// Exibe o tipo da variável 'dados', que deve ser 'object'
console.log(typeof dados);
// Converte o objeto 'dados' em uma string JSON e armazena na variável 'clienteEmString'
const clienteEmString = JSON.stringify(dados);
// Exibe a string JSON resultante no console
console.log(clienteEmString);
// Converte a string JSON de volta em um objeto JavaScript e armazena na variável 'objetoCliente'
const objetoCliente = JSON.parse(clienteEmString);
// Exibe o objeto reconvertido no console
console.log(objetoCliente);
