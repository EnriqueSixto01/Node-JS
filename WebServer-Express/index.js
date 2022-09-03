//====== Creando un Web-Server ===========//
const http = require("http");

const server = http.createServer((req, res) => {
  //createServer recibe como parametro un cb con 2 parametros que nos serviran para manejar las solicitude
  //y respuestas que se hagan al servidor
  res.status = 200; //le enviamos una respuesta con el codigo de estado igual a 200
  res.setHeader("Content-Type", "text/plain"); //le enviamos una respuesta con un Header con tipo de contenido de texto plano
  res.end("Hello World!"); //le mandamos una respuesta que va a mostrar en pantalla
});

server.listen(3000, () => {
  console.log("server on port 3000");
});
