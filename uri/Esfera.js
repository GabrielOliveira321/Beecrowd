var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var Raio = parseInt(lines.shift()); 

const pi = (3.14159);

const r = Math.pow(Raio, 3);

const final = ((r * pi) * 4/3);

console.log("VOLUME = " + final.toFixed(3));