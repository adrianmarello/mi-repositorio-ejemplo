import { EventEmitter } from "events";

// Crear una instancia de EventEmitter
const eventEmitter = new EventEmitter();

// Definir un evento personalizado
eventEmitter.on('saludo', (nombre) => {
  console.log(`Hola, ${nombre}!`);
});

// Emitir el evento 'saludo'
eventEmitter.emit('saludo', 'Mundo');