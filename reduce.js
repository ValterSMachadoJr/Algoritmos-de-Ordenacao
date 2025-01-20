const numeros = [4, 5, 1, 7, 10, 2, 20, 25];
numeros.sort((a, b) => a - b);
console.log(numeros);

const somanumeros = numeros.reduce((total, num) => total + num,0);
console.log(somanumeros);

const somanumero2 = numeros.reduce((acumulador, numero) => acumulador + numero)
console.log(somanumero2)

total = 0;
numeros.forEach((element) => {
total += element    
});
console.log(total)

soma=0
for (const element of numeros) {
    soma+= element    
}
console.log(soma)
