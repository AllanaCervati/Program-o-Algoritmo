/*
   7) Escrever um algoritmo que leia o nome de um vendedor, o seu 
      salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). 
      Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, 
      informar o seu nome, o salário fixo e salário no final do mês.
*/
// Entradas
var nomeVendedor = prompt("Digite o nome");
var salarioFixo = parseFloat(prompt("Digite o salário fixo"));
var totalVendas = parseFloat(prompt("Digite o total de vendas"));

// Processamento
var percentualComissao = 15/100;
var valorComissao = totalVendas * percentualComissao;
var salarioFinal = salarioFixo + valorComissao;

// Saídas
alert("Sr(a)" + nomeVendedor + "\nSeu salário fixo é de: " + salarioFixo 
      + "\nSalário total é de: " + salarioFinal);
