const { crearArchivo } = require('./helpers/multiplicar')
const yargs = require('yargs').argv;

console.clear();
/* const base = 4; */

console.log(process.argv );
console.log( yargs );


console.log('base : yargs', yargs.base);
















/* const base = 8; */
/* 
const [,,arg3  = "base=5"] = process.argv;
const [, base = '5'] = arg3.split('=');
 */
/* console.log(arg3); */
/* console.log(base);
 */

/* crearArchivo(base)
    .then(nameArchivo => console.log(nameArchivo, 'creado'))
    .catch(err =>  console.log(err)); */