var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var A = parseInt(lines.shift());
var B =parseInt(lines.shift());
var soma= A+B;

console.log("SOMA = " + soma);
