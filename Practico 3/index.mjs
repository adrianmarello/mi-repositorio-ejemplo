import { leerYOrdenarSuperheroes, agregarSuperheroes } from "./utils.mjs";

const archivoOriginal = './data/superheroes.json';
const archivoNuevos = './data/agregar-superheroes.json';

// Agregar nuevos supeheroes al archivo original
agregarSuperheroes(archivoOriginal, archivoNuevos);

// Leer y mostrar la lista de superheroes ordenada
const superheroeList = leerYOrdenarSuperheroes('./data/superheroes.json');
console.log('Superhéroes ordenados: ')
console.log(superheroeList);