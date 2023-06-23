var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const [codigo, quantidade, valor] = lines.shift().split(" ");

const [codigo2, quantidade2, valor2] = lines.shift().split(" ");

var soma = (quantidade * valor);

var soma2 = (quantidade2 * valor2);

var final = (soma + soma2);

console.log("VALOR A PAGAR: R$ " + final.toFixed(2));