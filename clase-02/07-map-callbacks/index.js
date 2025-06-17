// Utilizaremos este arreglo de prueba
let valoresOriginales = [1, 2, 3, 4, 5];

// Estamos acostumbrados a leer una función map de la siguiente forma:
let nuevosValores = valoresOriginales.map(x => x + 1); // nuevosValores tendrá: [2,3,4,5,6]
console.log(nuevosValores); // Imprimimos el resultado

/*
* Sin embargo, lo que metemos dentro de la función map es una función (flecha, más específicamente), que indica que se sume en 1 el valor
* del número que esté en el arreglo.
* ¿Siempre tenemos que sumar 1? ¡No! Nosotros podemos meter la operación que queramos, y map la ejecutará de manera interna!
*/

let otrosValores = valoresOriginales.map(x => x * 2); // otrosValores tendrá: [2,4,6,8,10]
console.log(otrosValores); // Imprimimos el resultado
let masValores = valoresOriginales.map(x => "a");     // masValores tendrá: ["a","a","a","a","a"]
console.log(masValores); // Imprimimos el resultado

/*
* Notamos que, no importa cuánto cambie la función que esté metiendo dentro de map, map está hecho para RECIBIR UNA FUNCIÓN COMO PARÁMETRO
* y poder ejecutarla cuando lo considere pertinente. Ahora sí, estructuramos el callback por fuera.
*/

const funcionCallback = (valor) => { // Función que evalúa si el valor del arreglo es un número par
  if (valor % 2 === 0) {
    return valor;
  } else {
    return "no es par";
  }
};

const evaluacionDePares = valoresOriginales.map(funcionCallback); // Estoy pasando la función completa como argumento de la función map
console.log(evaluacionDePares); // El resultado será: ["no es par", 2, "no es par", 4, "no es par"]


// ejemplo de callbacks

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const realizarOperacion = (a, b, operacion) => {
    console.log('voy a realizar una operación');
    let resultado = operacion(a, b);
    console.log(`El resultado de la operación es: ${resultado}`);
}

realizarOperacion(10, 5, sumar); // El resultado de la operación es: 15
realizarOperacion(10, 5, restar); // El resultado de la operación es: 5
realizarOperacion(10, 5, multiplicar); // El resultado de la operación es: 50
realizarOperacion(10, 5, dividir); // El resultado de la operación es: 2

// ejemplo de promesas
const dividirConPromesa = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject(new Error("No se puede dividir por cero"));
        } else {
            resolve(a / b);
        }
    });
}

dividirConPromesa(10, 2)
    .then(resultado => console.log(`El resultado de la división es: ${resultado}`)) // El resultado de la división es: 5
    .catch(error => console.error(`Error: ${error.message}`));

dividirConPromesa(10, 0)
    .then(resultado => console.log(`El resultado de la división es: ${resultado}`))
    .catch(error => console.error(`Error: ${error.message}`)); // Error: No se puede dividir por cero