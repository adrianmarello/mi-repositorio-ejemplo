import path from 'path';

// Definir una ruta de archivo ejemplo
const filePath = './data/example.txt';

// Obtener el directorio base
const baseDir = path.dirname(filePath);
console.log('Directorio base: ', baseDir);

// Obtener el nombre del archivo sin extensión
const fileName = path.basename(filePath, '.txt');
console.log('Nombre del archivo: ', fileName);

// Obtener la extensión del archivo
const extension = path.extname(filePath);
console.log('Extensión del archivo: ', extension);

// Crear una ruta unida
const joinedPath = path.join('/user', 'docs', 'newfile.txt');
console.log('Ruta unida: ', joinedPath);