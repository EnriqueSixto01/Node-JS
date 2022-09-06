
const {Schema, model} = require('mongoose')

//defino mi modelo
const UsuarioSchema = Schema({
    name: {
        type: String,
        required: [true, "Name Required"] //podemos seteare un array donde el primer dato es el booleano que indicara si es requerido o no
                            //y como segundo darto un mensaje en caso de que no sea enviado
    },
    email: {
        type: String,
        required: [true, "emal required"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "password required"]
    }, 
    image: {
        type: String,
    },
    rol: {
        type: String,
        required: String,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    status: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default:false
    },
});



module.exports = model( 'Usuario', UsuarioSchema); //la funcion model requiere como primer parametro un string que será el nombre 
                                                    //con el que se definira nuestra tabla en la DB y como segundo parametro se le 
                                                    //pasará el schema