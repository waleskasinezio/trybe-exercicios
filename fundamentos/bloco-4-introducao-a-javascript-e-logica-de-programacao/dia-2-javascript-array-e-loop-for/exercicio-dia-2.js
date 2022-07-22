//questão 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i +=1){
  console.log(numbers[i]);
}
//questão 2
let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let i = 0; i < numbers1.length; i +=1) {
  sum += numbers1[i];
}
console.log(sum);

//questão 3 e 4

function ArrayAvg(numbers3) {
  let i = 0, summ = 0, ArrayLen = numbers3.length;
  while (i < ArrayLen ) {
    summ = summ + numbers3[i++];
  }
  return summ / ArrayLen;
}
let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let a = ArrayAvg(numbers3);
console.log(a)
if (a > 20) {
  console.log("valor maior que 20");
}
else {
  console.log("valor menor ou igual a 20");
}

//questão 5
let numbers4 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers4[0]
for (let i = 0; i < numbers4.length; i+=1) {
  if(numbers4[i] > maior) {
    maior = numbers4[i];
  }
}
console.log(maior)
 
//questão 6
let numbers5 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0;

for (let i = 0; i < numbers5.length; i +=1) {
  if (numbers5[i]% 2 != 0) {
    contador +=1;
  }
}
if (contador === 0) {
  console.log("nenhum valor ímpar encontrado");
}
else {
  console.log(contador);
}

//questão 7
let numbers6 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers6[0]
for (let i = 0; i < numbers6.length; i+=1) {
  if(numbers6[i] < menor) {
    menor = numbers6[i];
  }
}
console.log(menor)

//questão 8
let numbers7 = [];
for (let i = 0; i <= 25; i +=1) {
  numbers7.push(i);
}
console.log(numbers7);
 
//questão 9
let numbers8 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers8.length; i +=1) {
  console.log(numbers8[i] / 2);
}

const n = 9 ;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);
