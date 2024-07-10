console.log("hi");

setTimeout(() => {
  console.log("wait");
}, 1000);

console.log("hola");

setTimeout(() => {
  console.log("wait2");
}, 0);

setTimeout(() => {
  console.log("wait2");
}, 1000);

console.log("prueba");

//Cual será el orden ?
