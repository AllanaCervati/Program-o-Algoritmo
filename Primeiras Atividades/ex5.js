/*
  5) Construa um algoritmo que leia o nome de um aluno e três notas obtidas 
     durante o semestre, ao final mostre o nome do aluno e a média aritmética das notas.
*/
var nome = prompt("Digite o seu nome");
var nota1 = parseFloat(prompt("Digite a primeira nota"));
var nota2 = parseFloat(prompt("Digite a segunda nota"));
var nota3 = parseFloat(prompt("Digite a terceira nota"));

var media = (nota1 + nota2 + nota3)/3;

alert("Nome: " + nome + "\nMedia: " + media);







