// const elements = [1, "h", true, null];

// function printEle() {
//   const number = 15;
//   console.log(elements[0]);
//   console.log(number);
// }

// // console.log(number);

// printEle();

// if (true) {
//   const another = "hola";
//   console.log(elements[2]);
//   console.log(another);
// }

// console.log(another);
const word = "hola";

function prueba() {
  console.log(word);

  function prueba2() {
    const word = "lapiz";
    console.log(word);

    function prueba3() {
      const word = "celular";
      console.log(word);

      function prueba4() {
        console.log(word);
      }

      prueba4();
    }

    prueba3();
  }

  prueba2();
}

prueba();
