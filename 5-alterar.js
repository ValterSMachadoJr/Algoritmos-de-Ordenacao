const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
  };
  console.log(pessoa.nome);
  console.log(pessoa.telefone);//undefined - 
  pessoa.telefone = "11 2223333444"; //inclusão telefone
  console.log(pessoa.telefone);
  pessoa.nome = "Luma Silva"; //alteração nome
  console.log(pessoa);
  const novaPessoa = {
    nome: "Pedro",
  };
  
 // pessoa = novaPessoa; 