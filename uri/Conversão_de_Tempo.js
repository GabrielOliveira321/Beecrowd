var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var N = parseInt(lines.shift());

var minutos = (60 * 60);

var segundos = (60);

var horas = Math.floor(N / minutos); 
N = Math.floor(N % minutos);

var mt = Math.floor(N / segundos);
N = Math.floor(N % segundos);

var final = N;

console.log(horas + ":" + mt + ":" + final);