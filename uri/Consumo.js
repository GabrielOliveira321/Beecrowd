var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const x = parseInt(lines.shift());
const y = parseFloat(lines.shift());

var saida = (x / y);

console.log(saida.toFixed(3) + " km/l");