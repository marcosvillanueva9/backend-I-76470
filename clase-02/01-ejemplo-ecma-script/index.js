// ECMA SCRIPT 7

// ejemplo potenciación y manejo de array con includes
const base = 2;
const exponente = 3;
const potencia = base ** exponente;

console.log(potencia); // 8
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.includes(3)); // true
console.log(numeros.includes(6)); // false

// ECMA SCRIPT 8

// ejemplo manejo de objetos con Object.values y Object.entries
const usuario = {
    nombre: "Eugenio",
    edad: 26,
    profesion: "Desarrollador"
};

console.log(Object.values(usuario)); // ['Eugenio', 26, 'Desarrollador']
console.log(Object.entries(usuario)); // [['nombre', 'Eugenio'], ['edad', 26], ['profesion', 'Desarrollador']]
console.log(Object.keys(usuario)); // ['nombre', 'edad', 'profesion']

// ECMA SCRIPT 9

// ejemplo de rest operator y spread operator
const numerosArray = [1, 2, 3, 4, 5];
const [primero, segundo, ...resto] = numerosArray;
console.log(primero); // 1
console.log(segundo); // 2
console.log(resto); // [3, 4, 5]

const numerosArray2 = [6, 7, 8];
const numerosCombinados = [...numerosArray, ...numerosArray2];
console.log(numerosCombinados); // [1, 2, 3, 4, 5, 6, 7, 8]