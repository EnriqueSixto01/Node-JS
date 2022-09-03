const express = require('express');
const cors = require('cors')
const users = require('../routes/user.js')
class Server {
    constructor(){
        this.app = express();
        this.port =  process.env.PORT;

        //Cors
        this.app.use(cors()); //nos permite proteger nuestro server, para solo permitir que 
                              //ciertas paginas puedan acceder a nuestra restAPI
        //middlewares
        this.middlewares();
        this.app.use(express.json())

        //Rutas de mi app
        this.routes();
    }

    middlewares(){
        //directorio publico
        this.app.use(express.static('public'))
    }

    routes(){
       this.app.use("/api/users",users)
    }

    listen(){
        this.app.listen(this.port, () => {
        console.log("Listen on PORT", this.port)
        });
    }
}

module.exports = Server;