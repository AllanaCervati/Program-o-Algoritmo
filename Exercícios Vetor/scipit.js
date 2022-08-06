/* 
1.	Crie um algoritmo para ler 5 números inteiros, armazene-os em um vetor, e mostre a quantidade de números pares e ímpares deste vetor.
*/

var num1 = parseInt(prompt("Digite algum numero: "))
var num2 = parseInt(prompt("Digite algum numero: "))
var num3 = parseInt(prompt("Digite algum numero: "))
var num4 = parseInt(prompt("Digite algum numero: "))
var num5 = parseInt(prompt("Digite algum numero: "))

var vetor = [num1, num2, num3, num4, num5]

var par = 0;
var impar= 0;

for(var i = 0; i < vetor.length; i++){
    if(vetor[i] % 2 == 0){
        par++;
    } if(vetor[i] % 2 != 0){
        impar++
    }
} alert("Quantidade de pares: " + par + "\n" + "Quantidade de impares: " + impar)


/*
2.	Faça um algoritmo que leia 6 números e armazene em um vetor. Depois, some os 3
primeiros elementos deste vetor.
*/
var num1 = parseInt(prompt("Digite algum numero: "))
var num2 = parseInt(prompt("Digite algum numero: "))
var num3 = parseInt(prompt("Digite algum numero: "))
var num4 = parseInt(prompt("Digite algum numero: "))
var num5 = parseInt(prompt("Digite algum numero: "))
var num6 = parseInt(prompt("Digite algum numero: "))

var vetor = [num1, num2, num3, num4, num5, num6]

var res = 0;

for(var i = 0; i < 3; i++){
    res = vetor[i] + res
}alert(res)


/*
3.	Crie um programa que solicite a entrada de 5 números pelo usuário, armazenando-os em um vetor,
 e então monte outro vetor com os valores do primeiro multiplicados por 2, e exiba os valores dos dois vetores na tela.
*/

var num1 = parseInt(prompt("Digite algum numero: "))
var num2 = parseInt(prompt("Digite algum numero: "))
var num3 = parseInt(prompt("Digite algum numero: "))
var num4 = parseInt(prompt("Digite algum numero: "))
var num5 = parseInt(prompt("Digite algum numero: "))

var vetor = [num1, num2, num3, num4, num5]
var vetor2 = []

for(var i = 0; i< vetor.length; i++){
    vetor2[i] = vetor[i] * 2
}
alert("Array 1: " + vetor + "\nArray 2: " + vetor2)

/* 
4.	Faça um algoritmo que receba 5 números inteiros, armazene-os em um vetor, em seguida, descubra e exiba o maior número.
*/

var num1 = parseInt(prompt("Digite algum numero: "))
var num2 = parseInt(prompt("Digite algum numero: "))
var num3 = parseInt(prompt("Digite algum numero: "))
var num4 = parseInt(prompt("Digite algum numero: "))
var num5 = parseInt(prompt("Digite algum numero: "))

var vetor = [num1, num2, num3, num4, num5]

var numMaior = 0;

for(var i =0; i < vetor.length; i++){
    if(vetor[i] > numMaior){
        numMaior = vetor[i]
    }
} alert("O maior entre eles são: " + numMaior)