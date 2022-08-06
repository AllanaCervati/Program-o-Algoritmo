/*
   4) Considerando que para um consórcio, sabe-se o número total de prestações, 
      a quantidade de prestações pagas e o valor atual da prestação, escreva um 
      algoritmo que determine o total pago pelo consorciado e o saldo devedor.
*/
var numeroTotalDePrestacoes = parseInt(prompt("Digite o numero total de prestações"));
var quantidadeDePrestacoesPagas = parseInt(prompt("Digite a qtde de prestações pagas"));
var valorAtualDaPrestacao = parseFloat(prompt("Digite o valor da prestação"));

var totalPago = valorAtualDaPrestacao * quantidadeDePrestacoesPagas;
var saldoDevedor = valorAtualDaPrestacao * numeroTotalDePrestacoes - totalPago;

alert("Total pago: " + totalPago + "\nSaldo devedor: " + saldoDevedor);







