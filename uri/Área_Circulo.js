var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const [area] = lines.shift("").split(" ").map(item => parseFloat(item));  

const π = (3.14159);

const A = Math.pow((area), 2);

const B = (A * π);

console.log("A=" + B.toFixed(4));

//31819.3103