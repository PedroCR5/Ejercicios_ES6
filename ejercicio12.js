//!Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

//!Haz varios ejemplos y compruebalos.

//!Sugerencia de función:
function findArrayIndex(array, text) {
  let position = array.indexOf(text) + 1;
  console.log(`La posición del texto ${text} en el array es la número ${position}.`);
}

//!Ej array:
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

mainCharacters.forEach(element => {
  findArrayIndex(mainCharacters, element)
});