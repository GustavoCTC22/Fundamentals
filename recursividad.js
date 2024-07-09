//SIN RECURSIVIDAD
let number = 10;

while (number > 0) {
  console.log(number);
  // number = number - 1;
  // number -= 1;
  number--;
}

//CON RECURSIVIDAD
function restar(n) {
  if (n <= 0) {
    return;
  }

  console.log(n);
  return restar(n - 1);
}

restar(10);

//TAREA: Hacer funciones recursivas acerca de fibonacci y factorial de un número
