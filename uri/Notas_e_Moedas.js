var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseFloat(input);

var B = [100, 50, 20, 10, 5, 2]

var N2 = [1, 0.50, 0.25, 0.10, 0.05, 0.01]

console.log("NOTAS:");

for (var i = 0; i < B.length; ++i) {
    var notas = N / B[i];
    N = N % B[i];
    console.log(`${parseInt(notas)} nota(s) de R$ ${B[i]}.00`);

} 

console.log("MOEDAS:");

for (var i = 0; i < N2.length; i++) {
    var moedas = N / N2[i];
    N = N % N2[i] + 0.00001;
    console.log(`${parseInt(moedas)} moeda(s) de R$ ${N2[i].toFixed(2)}`); 

}