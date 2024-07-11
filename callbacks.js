// Callback
const operation = (number1, number2, callback) => {
  return callback(number1, number2);
};

const suma = operation(15, 10, (a, b) => a * b);
const multiplicacion = operation(15, 10, (a, b) => a + b);

console.log(suma);
console.log(multiplicacion);

const elementos = [1, 2, 3, 4, 5, 6];

const mapeo = elementos.map((value, index, array) =>
  value.toString().concat(index).split("").concat(array)
);

console.log(mapeo);
