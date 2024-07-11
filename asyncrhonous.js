//

const films = [
  { id: 1, nombre: "Fragmentados", año: 2020 },
  { id: 1, nombre: "Chernobyl", año: 2020 },
  { id: 1, nombre: "Interstelar", año: 2020 },
  { id: 1, nombre: "El Castillo Vagabundo", año: 2020 },
  { id: 1, nombre: "La isla siniestra", año: 2020 },
  { id: 1, nombre: "Corazones de hierro", año: 2020 },
];

//Sincrono
const getFilms = () => {
  return films;
};
// console.log(getFilms());

//asincrono
const getFilmsTimeOut = () => {
  setTimeout(() => {
    return films;
  }, 3000);
};

// console.log(getFilmsTimeOut());

const getFilmsPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(films);
    }, 2000);
  });
};

console.log(getFilmsPromise());

//Promesas: pending --> resolve, rejected
