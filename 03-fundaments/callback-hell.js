const empleados = [
    {
        id: 1,
        nombre: 'Enrique'
    },
    {
        id: 2,
        nombre: 'Daniel'
    },
    {
        id: 3,
        nombre: 'Giovanni'
    }
]

const salarios = [
    {
        id: 1,
       salario: 1000
    },
    {
        id: 2,
        salario: 3000
    },
]

//---------------------------------------------------------
// const getEmpleado = (id) => { //definimos una arrow function que devuelve el objeto del array, segun el id que reciba por parametro
//     const empleado = empleados.find((e) => e.id === id)
//     return empleado;
// }

// console.log(getEmpleado(3))
//----------------------------------------------------------

//----------- Condicionando la funcion para cuando reciba un id de un empleado que no existe -------------------
// const getEmpleado = (id) => { //definimos una arrow function que devuelve el objeto del array, segun el id que reciba por parametro
//     const empleado = empleados.find((e) => e.id === id)
//     if(empleado) 
//         return empleado;
//     else 
//         return `El empleado con id ${id} no existe`
// }

// console.log(getEmpleado(7)) //El empleado con id 7 no existe
//-------------------------------------------------------------

//------------ Mandando un callback como 2do parametro a la funcion getEmpleado--------------------------------

const getEmpleado = (id, callback) =>{
    const empleado = empleados.find((e) => e.id === id)
        if(empleado) 
            callback(null, empleado);
        else 
            callback(`El empleado con id ${id} no existe`);
}


const getSalario = (id, callback) =>{
    const salario = salarios.find((s) => s.id === id)?.salario  // '?' --> null ccheck operator, para preguntar si algo existe, es decir,
                                                                //si algo no devuelve undefined
    if(salario) 
        callback(null, salario);
    else 
        callback(`No existe salario para el id ${id}`);
}

const id = 1;
getEmpleado(id, (err, empleado) => {
    if(err){
        console.log('ERROR!');
        return console.log(err);
    }

    getSalario(id, (err,salario) => {
        if(err){
           return console.log(err)
        }else{
           console.log(`El empleado ${empleado.nombre} tiene un salario de ${salario}`)
        }
   })
})



//-------------------------------------------------------------------------------------------------------------