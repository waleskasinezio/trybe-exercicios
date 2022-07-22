//questão 1
const a = 5;
const b = 10;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

//questão 2
const n1 = 10;
const n2 = 12;

  if (n1 > n2) {
    console.log(n1);
  }
  
  else {
    console.log(n2);
  } 

//questão 3
const maiorDeTres1 = 50;
const maiorDeTres2 = 20;
const maiorDeTres3 = 30;

if (maiorDeTres1 > maiorDeTres2) {
  console.log(maiorDeTres1);
}
else if (maiorDeTres2 > maiorDeTres3) {
  console.log(maiorDeTres2);
}
else if (maiorDeTres3 > maiorDeTres1) {
  console.log(maiorDeTres3);
}

//questão 4
const valorDefinitivo = 5;

if (valorDefinitivo > 0) {
  console.log("positive");
} 
else if (valorDefinitivo < 0) {
  console.log("negative");
}
else {
  console.log("zero");
}

//questão 5
const valoresTriangulo1 = -40;
const valoresTriangulo2 = 40;
const valoresTriangulo3 = 100;

const soma = valoresTriangulo1 + valoresTriangulo2 + valoresTriangulo3;

if (soma == 180) {
  console.log(true);
}
else {
  console.log(false);
}
if (valoresTriangulo1 < 0) {
  console.log("Erro");
}
else if (valoresTriangulo2 < 0) {
  console.log("Erro");
}
else if (valoresTriangulo3 < 0) {
  console.log("Erro");
}

//questão 6
let pecaXadrez = "Torre"

pecaXadrez = pecaXadrez.toLowerCase();


if (pecaXadrez == "rei") {
  console.log("Pode ser movimentado em qualquer direção do tabuleiro, mas apenas de casa em casa.");
}
else if (pecaXadrez == "rainha") {
  console.log("Sem restrições, a Rainha tem livre movimentação no jogo na horizontal, vertical e diagonais.");
}
else if (pecaXadrez == "torre") {
  console.log("pode correr sem restrição de número de casas e em todas as direções (frente, trás, direita, esquerda).");
}
else if (pecaXadrez == "bispo") {
  console.log("Sem restrição de número de casas, mas somente no sentido diagonal.");
}
else if (pecaXadrez == "cavalo") {
  console.log("Realiza movimentos em “L”, ou seja, duas casas em um sentido e uma casa em sentido perpendicular àquele, em qualquer direção.");
}
else if (pecaXadrez == "peao") {
  console.log("Pode apenas realizar movimentos frontais, de forma que o primeiro movimento de cada peão abranja até duas casas, e os demais se limitam a uma casa à frente. O ataque do peão sempre ocorre na diagonal.")
}
else {
  console.log("Erro!")
}

//questão 7
const porcentagem = -1;

if (porcentagem < 0 || porcentagem > 100) {
  console.log("Erro, encerrar");
}
else if (porcentagem >= 90) {
  console.log("A");
}
else if (porcentagem >= 80) {
  console.log("B");
}
else if (porcentagem >= 70) {
  console.log("C");
}
else if (porcentagem >= 60) {
  console.log("D");
}
else if (porcentagem >= 50) {
  console.log("E");
}
else if (porcentagem < 50) {
  console.log("F");
}

//questão 8
const valor1 = 50;
const valor2 = 69;
const valor3 = 2;

if (valor1 % 2 == 0 || valor2 % 2 == 0 || valor3 % 2 == 0) {
  console.log("true");
}
else {
  console.log("false");
}

//questão 9
const num1 = 50;
const num2 = 41;
const num3 = 10;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
  console.log("true");
}
else {
  console.log("false");
}

//questão 10
const custo = 100;
const venda = 150;

if (custo >= 0 && venda >= 0) {
  const custoTotal = custo * 1.2;
  const lucroTotal = (venda - custoTotal) * 1000
  console.log(lucroTotal);
}
else {
  console.log("Erro, não pode ser negativo");
}


//questão 10

//questão 11
