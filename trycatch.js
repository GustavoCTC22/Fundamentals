// ErrorHandling

//SINTAXIS
/*
try {
  // Código que podría causar un error
} catch (error) {
  // Código que se ejecuta si ocurre un error
  console.error(error.message);
}
*/

//CASO 1:
// console.log("antes del saludo");

// console.log(saludo);
// console.log("despues del saludo");
// console.log("hola");
// console.log("hola");
// console.log("hola");
// console.log("hola");
// console.log("hola");
// console.log("hola");

//CASO 2:

// console.log("antes del saludo");

// try {
//   console.log(saludo);
//   // throw new Error("Error personalizado");
// } catch (error) {
//   console.log(error);
//   // console.log(error.message)
// }

// console.log("despues del saludo");
// console.log("hola");
// console.log("hola");
// console.log("hola");
// console.log("hola");
// console.log("hola");

//EJEMPLOS:

// const inputUser = "";

// function validInput(texto) {
//   try {
//     if (texto.trim() === "") {
//       throw new Error("El input no puede estar vacío");
//     }
//     console.log(texto, "Es valido");
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// validInput(inputUser);

// const validNumber = (number) => {
//   if (typeof number !== "number") {
//     return;
//   }
//   console.log(number, "Es valido");
// };

// validNumber("");

//FINALLY==============================================
/*
try {
  // código que potencialmente lanzará un error
} catch (error) {
  // se maneja el error
} finally {
  // se ejecuta pase lo que pase
} 
  */

//EJEMPLO 2
// function realizarTrabajo() {
//   try {
//     console.log("Empezar trabajo peligroso");

//     // Imagina que algo sale mal

//     if (4 > 5) {
//       throw new Error("¡Se cortó el cable incorrecto!");
//     }

//     console.log("despues del error");
//     console.log("despues del error");
//     console.log("despues del error");
//   } catch (error) {
//     console.log("Manejo el error:", error.message);
//   } finally {
//     console.log("Finalizar trabajo peligroso");
//   }
// }

// realizarTrabajo();
//EJEMPLO 3
// function realizarTrabajo() {
//   try {
//     console.log("Empezar trabajo peligroso");
//     // Un error inesperado
//     throw new Error("Error catastrófico");
//   } catch (error) {
//     if (error.message === "¡Se cortó el cable incorrecto!") {
//       console.log("Manejo el error:", error.message);
//     } else {
//       throw error;
//     }
//   } finally {
//     console.log("Finalizar trabajo peligroso"); // <-- Ejecución garantizada!
//   }
// }

// realizarTrabajo();

//SETIMEOUT-TRYCATCH

// console.log("antes del saludo");

// setTimeout(() => {
//   try {
//     console.log(saludo);
//   } catch (error) {
//     console.log(error.message);
//   }
// }, 1000);

// console.log("despues del saludo");

// setTimeout(() => {
//   console.log("despues del error");
// }, 1500);

// console.log(saludo);

// TypeError
// throw new TypeError("Tipo de dato incorrecto");

// RangeError
// throw new RangeError("El número está fuera del rango permitido");

// SyntaxError
// throw new SyntaxError("Error en la sintaxis del código");

// ReferenceError
// throw new ReferenceError("Variable no definida");
