
// const { argv } = require('process');
// const { demandOption, options } = require('yargs');
const{ crearArchivo }=require('./helpers/multiplicar')
//importamos arv del archivo yargs.js ( se exporta de eso modulo tambien)
const argv = require ('./config/yargs');
require('colors');
// 5 * 1 = 5
//5*2=10
//option('l')
//listar
//boolean
//default:false 
console.clear();
// console.log(process.argv);
// console.log(argv);
// console.log('base:yargs',argv.base);
// console.log(process.argv);
// const [,,arg3='base=5']=process.argv;
// const [, base=5 ]=arg3.split('=');
// console.log(base
// const base = 6; 

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
    .catch(e=>console.log(e));