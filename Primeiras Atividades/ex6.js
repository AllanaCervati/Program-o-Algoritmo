/*
    6) O custo ao consumidor de um carro novo, é a soma do custo de fábrica 
       com a percentagem do revendedor e com o custo dos impostos 
    (aplicados ao custo de fábrica). Supondo que a percentagem do revendedor 
    seja de 25% do custo de fábrica e que os impostos custam 45 % do custo de fábrica, 
    faça um algoritmo que leia o valor de custo de fábrica e determine o preço final 
    do automóvel (custo ao consumidor).
  
*/
var valorDeCustoDeFabrica = parseFloat(prompt("Digite o custo de fábrica"));
debugger;
// Porcentagens
var porcentagemDoRevendedor = 25/100;
var porcentagemImpostos = 45/100;

// Obtendo os valores

var valorDoRevendedor = valorDeCustoDeFabrica * porcentagemDoRevendedor;
var valorImpostos = valorDeCustoDeFabrica * porcentagemImpostos;

var precoFinal = valorDeCustoDeFabrica + valorDoRevendedor + valorImpostos;

alert("Preço final: " + precoFinal);







