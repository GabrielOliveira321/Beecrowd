var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var x = parseInt(lines.shift());

var saida = (x * 60) / 30;

console.log(saida + " minutos");