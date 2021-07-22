// Luiz Otavio Miranda tem 30 anos , pesa 84 kg tem 1.80 de altura e seu IMC e de .....Luiz Otavio nasceu em ....*/

const nome ="Luiz Otavio";
const sobrenome="Miranda";
const idade=30;
const peso=84;
const alturaEmM=1.80;
let imc=peso/(alturaEmM*alturaEmM);
let ano=2021-idade;

console.log(imc.toFixed(2));
console.log(ano);

// template Strings
console.log(`${nome} ${sobrenome} tem ${idade} anos,pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC e de ${imc} e nasceu no ano de ${ano}`)