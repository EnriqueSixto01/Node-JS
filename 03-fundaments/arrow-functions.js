//funcion comun
function sumar(a, b) {
  return a + b;
}

console.log(sumar(20,6))
//Arrow function
const suma = (a, b) => a + b;


console.log(suma(2, 8));


const guitar = {
    model: 'LesPaul',
    year: 2021,
    sound: function(){
        console.log(this)//this hace referencia al contexto donde es llamado, en este caso hace hace referencia al objeto
    }
}

guitar.sound() //{model: 'LesPaul', year: 2021, sound: [function]}

const guitar2 = {
    model: 'Ibanez',
    year: 2022,
    sound: () =>{
        console.log(this) //con la arrow function this ahora hace referencia al contexto global 
    }
}

guitar2.sound() //objeto global
