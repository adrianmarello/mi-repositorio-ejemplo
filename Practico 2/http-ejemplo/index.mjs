import http from 'http';

// Crear un servidor http básico
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// Configurar el servidor para que escuche en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
})