/*usuario digita dois numeros e preciso transformar essas strings pq estao em strings em numeros*/

let num1=prompt("digite um numero");
let num2=prompt("digite segundo numero");

console.log(typeof num1, typeof num2);

num1=Number(num1);
num2=Number(num2);

const resultado=num1+num2;
alert(`O resultado do primeiro ${num1} + o segundo ${num2} é ${resultado}`);


