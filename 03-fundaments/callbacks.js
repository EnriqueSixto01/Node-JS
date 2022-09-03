
const getUsuarioById = (id, cb) => {
    const usuario ={
        id,
        nombre: 'Enrique'
    }

    setTimeout(() => {
        cb(usuario)
       
    }, 2000)
}

//a getUsuarioByid le pasamos como primer parametro el id y como segundo parametro un callback
getUsuarioById(5, ({id,nombre}) => { 
    console.log(`Hola ${nombre} con id ${id}`)
})