//?Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros.
let a = 10;
let b = 5;
const sum = () => {
  console.log(a + b);
}
sum();

//!1.1 Ejecuta esta función sin pasar ningún parametro
const sum1 = () => {
  console.log(a + b);
}
sum1();
//!1.2 Ejecuta esta función pasando un solo parametro
const sum2 = () => {
  console.log(a + b);
}
sum2(a);
//!1.3 Ejecuta esta función pasando dos parametros
const sum3 = () => {
  console.log(a + b);
}
sum3(a, b);