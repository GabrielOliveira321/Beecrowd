input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let tempo = (input);

var AN = (365);

var MS = (30);

var ano = Math.floor(tempo / AN);
tempo = Math.floor(tempo % AN);

var meses = Math.floor(tempo / MS);
tempo = Math.floor(tempo % MS);

var dias = tempo;

console.log(ano + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");