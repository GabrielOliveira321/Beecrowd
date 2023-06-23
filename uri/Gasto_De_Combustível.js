var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var entrada = parseInt(lines.shift());
var entrada2 = parseInt(lines.shift());

const km = (12);

var metade = (entrada * entrada2);

const saida = (metade / km);

console.log(saida.toFixed(3));