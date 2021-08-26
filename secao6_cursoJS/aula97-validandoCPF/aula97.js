/*maneira de gerar um cpf conta inventada pelo gerador de CPF
como sao gerados esses dois ultimos digitos?

cpf:705.484.450-       52
7x  0x  5x  4x  8x  4x  4x  5x  0x
10   9   8   7   6   5   4   3   2
70   0   40  28  48  20   16  15  0  = 237

11 - (237 % 11) = 5 (primeiro digito)
Se o numero for maior que 9, consideramos 0

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11   10   9   8   7   6   5   4   3   2
77   0   45   32  56  24   20  20  0   10= 284

11 - (284 % 11) = 2 (segundo digito)*/

let cpf='705.484.450-52';  //precisa ser uma string pq tem cpf que comeca com 0 e pode dar problema
let cpfLimpo= cpf.replace(/\D+/g,'');//substituindo oque nao for numero por vazio , ou seja tirando o ponto
cpfArray=Array.from(cpfLimpo); // transformando em Array
console.log(cpfArray.reduce((ac,val) => ac + Number(val),0));//reduzindo o array em um unico elemento 
