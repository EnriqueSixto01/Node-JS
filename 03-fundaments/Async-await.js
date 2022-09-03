const empleados = [
    {
      id: 1,
      nombre: "Enrique",
    },
    {
      id: 2,
      nombre: "Daniel",
    },
    {
      id: 3,
      nombre: "Giovanni",
    },
  ];
  
  const salarios = [
    {
      id: 1,
      salario: 1000,
    },
    {
      id: 2,
      salario: 3000,
    },
  ];
  
  const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
      const empleado = empleados.find((e) => e.id === id)?.nombre;
      if (empleado) {
        resolve(empleado);
      } else {
        reject(new Error(`El empleado con id ${id} no existe`));
      }
    });
  };
  
  const getSalario = (id) => {
    return new Promise((resolve, reject) => {
      const salario = salarios.find((s) => s.id === id)?.salario;
      if (salario) {
        resolve(salario);
      } else reject(new Error(`No existe salario para el id ${id}`));
    });
  };
  
const getInfoUsuario = async(id) => {
  
  
  try{
  const empleado = await getEmpleado(id); //como getEmpleado retorna una promesa el await hace que Js espere hasta que se 
                                        //se indique que hacer cuando se resuelva o rechache la promesa retornada

  const salario = await getSalario(id); //hacemos otra espera de la promesa que devuelve getSalario

  return `El salario del ${empleado} es de ${salario}`
  }catch(err){
    throw err; //con el throw se llama inmediatamente al reject de la funcin asincrona
  }
}
  

const id = 2;
//por lo tanto getInfoUsuario esta retornando una variable que contiene el retorno de una promesa, y ahora con
//.then indicamos que hacer con lo que se resolvio o rechazo esa promesa
getInfoUsuario(id) 
  .then(msg => console.log(msg))
  .catch(err => console.log(err))