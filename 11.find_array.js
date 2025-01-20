let numeros = [4,2,5,40,30,60]
numeros.sort((a, b) => 
    {
     return a - b
    });
console.log(numeros)

let primeiroMaiorque20 = numeros.find(
    numero => numero > 19    
);

console.log(primeiroMaiorque20)