//!Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

//!Sugerencia de array:

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, first, second) {
  let firstItem = array[first];
  let secondItem = array[second];
  array.splice(first, 1, secondItem);
  array.splice(second, 1, firstItem);
  console.log(fantasticFour);
};

swap(fantasticFour, 0, 3);