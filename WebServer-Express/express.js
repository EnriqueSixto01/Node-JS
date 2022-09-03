const express = require("express");
const logger = require("morgan");
const app = express();
const route = express.Router(); //usamos el metodo .Router para
//----Middlewares normalmen al principio---//
//esto porque puede que antes de llegar a rutas especificadas mas abajo, queramos procesar algo antes como por ejemplo
//una autenticacion, cambiar datos, subir imagenes, etc
app.use(logger("dev")); //dev es un formato predefinido requerido para configurar el middleware morgan
app.use("/route", route);
//================== Express Routing ===========================================//
//app ---> instancia del modulo express
//.get() --> metodo de http para solicitar una representacion de un recurso especifico.
// '/' ---> ruta a la cual se hace la solicitud
// req ---> argumento de request para manejar una solicitud al server
// res ---> argumento de response para manejar el encio de una respuesta al server
route.get("/", (req, res) => {
  //Se hace una peticion a la ruta indicada
  res.send("Que ondaaaaaa!!!"); //se responde con lo que se le pasa a .send()
});

app.get("/about", (req, res) => {
  res.send(`What's up???`);
});

route.get("/test", (req, res) => {
  res.send("<h1>Welcome!</h1>"); //Podemos enviar una espuesta con etieutado HTML
});

//----- Route Params --------------------------------------//
app.get("/user/:id", (req, res) => {
  console.log(req.params); // devuelve un objeto tipo {id: '5'}
  let { id } = req.params;

  res.send(`Usuario: ${id}`);
});

app.listen(3000, () => {
  //indicamos al server a que puerte debe ser levantado
  console.log("Server on port 3000");
});
