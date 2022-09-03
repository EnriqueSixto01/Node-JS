const fs = require("fs");
require('colors');
const crearArchivo = (base = 5, listar = false, hasta = 10) => {
  return new Promise((resolve, reject) => {
    let salida = "";
    let consola = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.blue} ${i} ${'='.blue} ${base * i}\n`;

    }

    if(listar){
      console.log(consola);
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    if (salida) {
      resolve(`tabla-${base}.txt`);
    } else reject(err);
  });
};

// const crearArchivo2 = async (base) => {
//   try {
//     let salida = "";
//     for (let i = 1; i < 11; i++) {
//       salida += `${base} x ${i} = ${base * i}\n`;
//     }
//     fs.writeFileSync(`tabla-${base}.txt`, salida);
//     return `tabla-${base}.txt`;
//   } catch (err) {
//     throw err;
//   }
// };

module.exports = {
  crearArchivo,
};
