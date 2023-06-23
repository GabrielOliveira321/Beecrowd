var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const [a, b, c] = input.split(" ").map(item => parseFloat(item));

var delta = ((b * b) - (4 * a * c));

var R1 = (-b + Math.sqrt(delta)) / (a * 2);
var R2 = (-b - Math.sqrt(delta)) / (a * 2);

if (a === 0 || delta < 0)  {
    console.log("Impossivel calcular")

} else {

    console.log("R1 = " + R1.toFixed(5));
    console.log("R2 = " + R2.toFixed(5));
}
