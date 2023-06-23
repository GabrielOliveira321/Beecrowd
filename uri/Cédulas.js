var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let a = parseInt(input);

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(a);

for(let nota of notas) {

    let QN = parseInt(a / nota);
    console.log(`${QN} nota(s) de R$ ${nota},00`);
    a = a % nota;

}