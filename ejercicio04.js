//!4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];
const nameUsers = users.map(function (element) {
  return element.name
});
console.log(nameUsers);

//!4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
/* const users = [
  {id: 1, name: 'Abel'},
  {id:2, name: 'Julia'},
  {id:3, name: 'Pedro'},
  {id:4, name: 'Amanda'}
]; */
const nameUsers2 = users.map(function (element) {
  if (element.name.charAt(0) === 'A') {
    element.name = 'Anacleto';
  }
  return element.name
});
console.log(nameUsers2);
//!4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
];
const visitedCities = cities.map(function (element) {
  if (element.isVisited) {
    element.name = element.name + ' (Visitado)';
  }
  return element.name
});
console.log(visitedCities);