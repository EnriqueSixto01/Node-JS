const {crearArchivo} = require('./helpers/multiplicate.js');
const argv = require('./config/yargs.js');
require('colors');

console.clear()

crearArchivo(argv.b, argv.l, argv.h)
    .then(data => console.log(data.rainbow, 'creada'))
    .catch(err => console.log(err))


// console.log(process.argv);
console.log(argv)
