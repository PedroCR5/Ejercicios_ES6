//!6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];
const number100 = numbers.find((element) => element === 100);
console.log(number100);

//!6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
  { title: 'Madagascar', stars: 4.5, date: 2015 },
  { title: 'Origen', stars: 5, date: 2010 },
  { title: 'Your Name', stars: 5, date: 2016 }
];
const film2010 = movies.find((element) => element.date === 2010);
console.log(film2010);
//!6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación lo queremos meter en la propiedad .mutation del objeto fusionado.
const aliens = [
  { name: 'Zalamero', planet: 'Eden', age: 4029 },
  { name: 'Paktu', planet: 'Andromeda', age: 32 },
  { name: 'Cucushumushu', planet: 'Marte', age: 503021 }
];
const mutations = [
  { name: 'Porompompero', description: 'Hace que el alien pueda adquirir	la habilidad de tocar el tambor' },
  { name: 'Fly me to the moon', description: 'Permite volar,	solo y exclusivamente a la luna' },
  { name: 'Andando que es gerundio', description: 'Invoca a un	señor mayor como Personal Trainer' }
];
const alien1 = aliens.find((element) => element.name === 'Cucushumushu');
const mutation1 = mutations.find((element) => element.name === 'Porompompero');
const mutationProperty = {};
mutationProperty.mutation = mutation1;
const mutationComplete = { ...alien1, ...mutationProperty };
console.log(mutationComplete);