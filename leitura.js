// Importa o módulo 'fs' para leitura de arquivos
const dados = require("./cliente.json");
//JSON: É um formato leve de troca de dados, que é fácil de ler e escrever
// para humanos e fácil de interpretar e gerar para máquinas.

// Exibe o conteúdo do arquivo 'cliente.json' no console
console.log(dados);

// Exibe o tipo de 'dados', que deve ser 'object', já que estamos carregando um JSON
console.log(typeof dados);
//Aqui, estamos utilizando typeof para verificar o tipo da variável dados. 
//Como estamos carregando um arquivo JSON, o tipo deve ser "object".
