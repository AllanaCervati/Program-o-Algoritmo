/*
   3) Um cliente de um banco tem um saldo positivo de R$ 500,00. Fazer um algoritmo 
      que leia um cheque que entrou e calcule o saldo, mostrando (escrevendo) o 
      novo saldo na tela.
*/
var saldoAtual = 500;
var valorCheque = parseFloat( prompt("Digite o valor do cheque") );

var saldoNovo = saldoAtual + valorCheque;

alert("Novo saldo: " + saldoNovo);



