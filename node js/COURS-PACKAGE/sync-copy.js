import fs from 'fs';

const content = fs.readFileSync('./salutation-copy.txt')
console.log(content.toString()); //Sinon il affiche en form Hexadecimal
console.log('Fin');
