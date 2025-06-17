// ejemplo difrencia entre || y ?? (nullish coalescing operator)

let variablePrueba = 0;

let variableAsignable = variablePrueba || "Valor por defecto";
console.log(variableAsignable); // "Valor por defecto" porque 0 es falsy
let variableAsignableNulo = variablePrueba ?? "Valor por defecto";
console.log(variableAsignableNulo); // 0 porque 0 no es null ni undefined

// ejemplo de variables privadas con #
class Usuario {
  #nombre; // Variable privada

  constructor(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }
}

const usuario = new Usuario("Eugenio");
console.log(usuario.getNombre()); // "Eugenio"
// console.log(usuario.#nombre); // Error: Cannot access private field
