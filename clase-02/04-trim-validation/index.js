// ejemplo de validacion de strings con trim

let nombre = "   Eugenio   ";
let vacio = "   ";

mensajes = [nombre, vacio];

mensajes.forEach((mensaje) => {
  if (mensaje.trim() === "") {
    console.log("El mensaje está vacío o solo contiene espacios en blanco.");
  } else {
    console.log(`El mensaje es: "${mensaje.trim()}"`);
  }
});


// ejemplo uso de flat

let numerosAnidados = [1, 2, [3, 4], [5, [6, 7]]];
let numerosPlanos = numerosAnidados.flat(); // [1, 2, 3, 4, 5, [6, 7]]
let numerosPlanosProfundo = numerosAnidados.flat(2); // [1, 2, 3, 4, 5, 6, 7]