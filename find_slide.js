const usuarios = [
    { nome: 'Ana', email: 'ana@example.com' },
    { nome: 'João', email: 'joao@example.com' },
    { nome: 'Luís', email: 'luis@example.com' },
    { nome: 'Maria', email: 'maria@example.com' }
  ];


const usuarioEncontrado = usuarios.find(usuario => usuario.nome === 'Luís');

console.log(usuarioEncontrado);
