var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const nome = lines.shift();

var y = parseFloat(lines.shift());
var s = parseFloat(lines.shift());

var inicio = (s * 0.15);

var fim = (inicio + y);

console.log("TOTAL = R$ " + fim.toFixed(2));