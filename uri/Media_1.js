var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const A = parseFloat(lines.shift());
const B = parseFloat(lines.shift());

let inicio = (A * 3.5 + B * 7.5);

const meio = (11);

const fim = (inicio / meio);

console.log("MEDIA = " + fim.toFixed(5));