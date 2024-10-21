import fs from 'fs';

// Clase para representar un superheroe
class Superheroe {
  constructor(id, nombreSuperheroe, nombreReal, nombreSoiedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo) {
    this.id = id;
    this.nombreSuperheroe = nombreSuperheroe;
    this.nombreReal = nombreReal;
    this.nombreSoiedad = nombreSoiedad;
    this.edad = edad;
    this.planetaOrigen = planetaOrigen;
    this.debilidad = debilidad;
    this.poder = poder;
    this.habilidadEspecial = habilidadEspecial;
    this.aliado = aliado;
    this.enemigo = enemigo;
  }
}

// Función para leer y ordenar los superheroes
export function leerYOrdenarSuperheroes(ruta) {
  const superheroeData = fs.readFileSync(ruta, 'utf8');
  const superheroeList = JSON.parse(superheroeData);

  // Convertir a instancias de superheroe
  const superheroeInstances = superheroeList.map(
    (hero) => new Superheroe(
      hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSoiedad, hero.edad, hero.planetaOrigen, 
      hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo
    )
  );

  // Ordenar por nombre de superheroe
  superheroeInstances.sort((a, b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));

  return superheroeInstances;
}

export function agregarSuperheroes(rutaOriginal,rutaNuevos) {
  const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
  const datosNuevos = fs.readFileSync(rutaNuevos, 'utf8');
  const superheroesOriginales = JSON.parse(datosOriginales);
  const superheroesNuevos = JSON.parse(datosNuevos);

  // Convertir los nuevos superheroes a instancias de Superheroe
  const superheroesNuevosInstancias = superheroesNuevos.map(
    (hero) => new Superheroe(
      hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSoiedad, hero.edad, hero.planetaOrigen, 
      hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo
    )
  );

  // Combinar listas
  const listaActualizada = [...superheroesOriginales, ...superheroesNuevosInstancias];

  // Convertir a JSON
  const jsonString = JSON.stringify(listaActualizada, null, 2);

  // Escribir la lista actualizada en el archivo
  fs.writeFileSync(rutaOriginal, jsonString, 'utf8');
  console.log('Lista de superhéroes actualizada con éxito')
}