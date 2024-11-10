//! Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada removeItem que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada findArrayIndex y obten el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

//!Finalmente retorna el array.

//!De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

function findArrayIndex(array, text) {
  if (array.includes(text)) {
    let position = array.indexOf(text) + 1;
    array.splice(position - 1, 1);
    console.log(`La posición del texto ${text} en el array es la número ${position}.`);
  } else {
    console.log(`El texto ${text} no está en el array.`);
  }
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
findArrayIndex(mainCharacters, "Leia")
findArrayIndex(mainCharacters, "Chewbacca")
findArrayIndex(mainCharacters, "Anakin")
findArrayIndex(mainCharacters, "Leia")
console.log(mainCharacters)