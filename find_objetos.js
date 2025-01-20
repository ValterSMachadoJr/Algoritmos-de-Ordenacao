//Imagine que temos um array de objetos representando 
//pessoas e queremos encontrar a pessoa com um nome específico.

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  
  // Encontrar a pessoa com o nome 'Bob'
 // const person = people.find(person => person.name === 'Bob');
  const person = people.find((person)=>{
   return person.name === 'Bob'
    });
  console.log(person); // { name: 'Bob', age: 30 }
  