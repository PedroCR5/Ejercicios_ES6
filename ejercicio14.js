//!Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.
//!Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! Busca información sobre la función de javascript Math.random().


function rollDice(facesNumber) {
  let number = Math.floor(Math.random() * facesNumber);
  console.log(`El dado tiene ${facesNumber} números y el número que ha salido es el ${number}.`)
};

rollDice(10);