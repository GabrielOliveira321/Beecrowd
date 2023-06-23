var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const [a, b, c] = lines.shift().split(" ").map(item => parseFloat(item));

var div = (a * c) / 2;
var div1 = c * (c * 3.14159);
var div2 = ((a + b) * c) / 2;
var div3 = (b * b);
var div4 = (a * b);

console.log("TRIANGULO: " + div.toFixed(3));
console.log("CIRCULO: " + div1.toFixed(3));
console.log("TRAPEZIO: " + div2.toFixed(3));
console.log("QUADRADO: " + div3.toFixed(3));
console.log("RETANGULO: " + div4.toFixed(3));