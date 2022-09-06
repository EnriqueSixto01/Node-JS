const { response } =  require('express');
const Usuario = require('../models/user.js')
const bcryptjs = require('bcryptjs');

const usersGet = (req, res = response)=>{
    const {name } = req.query;
    res.json({
        msg: "This is a GET - controller",
        name
    })
};

const usersPost = async(req, res = response)=>{
   
    const {name, email, password, rol} = req.body; //body sera un objeto con el json que se pasa por el parametro req
    const usuario = new Usuario({name, email, password, rol}); //aqui solo se crea la instancio con los datos pasados por body pero no se guarda nada en la DB
    
    //Verificar si el email existe
    const existEmail = await Usuario.findOne({email});
    if(existEmail){
        return res.status(400).json({
            msg: "email already exist"
        })
    }
    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync(); //por default es 10
    usuario.password = bcryptjs.hashSync(password, salt);

    //Guardar en DB
    await usuario.save() //aca si hacemos que se guarde la data recibida por body en la base de datos
    res.json({
        usuario
    })
};

const usersPut = (req, res = response)=>{
    let { id } = req.params;
    id = parseInt(id)
    res.json({
        msg: "This is a PUT - controller",
        id
    })
}

const usersDelete = (req, res = response)=>{
    res.json({
        msg: "This is a DELETE - controller"
    })
}




module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}