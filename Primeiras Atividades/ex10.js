/*
    10) Elabore um algoritmo que leia dois valores inteiros, A e B, 
        e apresente os valores trocados, ou seja, que troque o valor 
        da variável A pelo valor da variável B e vice-versa.
*/
// Entrada
var a = parseInt(prompt("Digite o valor de A"));
var b = parseInt(prompt("Digite o valor de B"));

// Processamento
var c = a;
a = b;
b = c;

// Saída
alert("O valor de A é: " + a +"\nO valor de B é: " + b);


// --------------------------
// a = 20;
// b = 10;
// c = 10;



