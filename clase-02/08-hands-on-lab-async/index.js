// Función suma
function suma(a, b) {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      reject("Operación innecesaria");
    } else if (a + b < 0) {
      reject("La calculadora sólo debe devolver valores positivos");
    } else {
      resolve(a + b);
    }
  });
}

// Función resta
function resta(a, b) {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      reject("Operación inválida");
    } else if (a - b < 0) {
      reject("La calculadora sólo puede devolver valores positivos");
    } else {
      resolve(a - b);
    }
  });
}

// Función multiplicación
function multiplicacion(a, b) {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("La calculadora sólo puede devolver valores positivos");
    } else {
      resolve(a * b);
    }
  });
}

// Función división (como en clase)
function division(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("No se puede dividir por cero");
    } else {
      resolve(a / b);
    }
  });
}

// Función asíncrona cálculos
async function calculos() {
  try {
    const resultadoSuma = await suma(5, 3);
    console.log("Resultado suma:", resultadoSuma);

    const resultadoResta = await resta(10, 5);
    console.log("Resultado resta:", resultadoResta);

    const resultadoMultiplicacion = await multiplicacion(4, 2);
    console.log("Resultado multiplicación:", resultadoMultiplicacion);

    const resultadoDivision = await division(20, 5);
    console.log("Resultado división:", resultadoDivision);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Ejecutamos la función de pruebas
calculos();
