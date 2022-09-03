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

const id = 9;

// getEmpleado(id)
//     .then((empleado) => console.log(empleado))
//     .catch(err => console.log(err))

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err))

//--------------------- Promise Hell -----------------------------------------
// getEmpleado(id)
//   .then((empleado) => {
//     getSalario(id)
//       .then((salario) => {
//         console.log(`El empleado ${empleado} tiene un salario de ${salario}`);
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));
//----------------------------------------------------------------------------
let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))
    .catch(err => console.log(err))