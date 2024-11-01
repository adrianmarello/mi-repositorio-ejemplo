import os from 'os';

// Obtener la arquitectura del sistema operativo
console.log('Arquitectura del sistema operativo: ', os.arch());

// Obtener el tipo de sistema operativo
console.log('Tipo de sistema operativo: ', os.type());

// Obtener la cantidad total de memoria disponible
console.log('Cantidad total de memoria disponible: ', os.totalmem());

// Obtener la memoria libre
console.log('Memoria libre: ', os.freemem());

// Obtener la información del CPU
console.log('Información del CPU: ', os.cpus());