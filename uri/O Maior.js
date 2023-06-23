var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const [a, b, c] = lines.shift().split(" ").map(item => parseInt(item));

var robin = (a + b + Math.abs(a - b)) / 2;

var batmam = (c + robin + Math.abs(c - robin)) / 2;

console.log(batmam + " eh o maior"); 