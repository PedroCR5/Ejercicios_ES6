//!Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.
//!Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//!Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.
//!Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript.
const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
const eachElementSounds = [];
let soundNames = [], wavesCounter = 0, rainCounter = 0, firecampCounter = 0, showerCounter = 0, trainCounter = 0, windCounter = 0;
users.forEach(element => eachElementSounds.push(element.favoritesSounds));
for (const key in eachElementSounds) {
  let propiedadesElement1 = Object.keys(eachElementSounds[key]);
  propiedadesElement1.forEach(element => {
    if (!soundNames.includes(element)) soundNames.push(element);
    if (element == `waves`) wavesCounter++;
    if (element == `rain`) rainCounter++;
    if (element == `firecamp`) firecampCounter++;
    if (element == `shower`) showerCounter++;
    if (element == `train`) trainCounter++;
    if (element == `wind`) windCounter++;
  });
}
console.log(`Los nombres de los sonidos son ${soundNames}.`);
console.log(`El sonido waves ha sido agregado ${wavesCounter} veces por los usuarios a favoritos.`);
console.log(`El sonido rain ha sido agregado ${rainCounter} veces por los usuarios a favoritos.`);
console.log(`El sonido firecamp ha sido agregado ${firecampCounter} veces por los usuarios a favoritos.`);
console.log(`El sonido shower ha sido agregado ${showerCounter} veces por los usuarios a favoritos.`);
console.log(`El sonido train ha sido agregado ${trainCounter} veces por los usuarios a favoritos.`);
console.log(`El sonido wind ha sido agregado ${windCounter} veces por los usuarios a favoritos.`);