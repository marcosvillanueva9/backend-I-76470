function generarNumerosAleatorios(cantidad, min, max) {
  return new Promise((resolve, reject) => {
    try {
      const resultados = {};

      for (let i = 0; i < cantidad; i++) {
        const numero = Math.floor(Math.random() * (max - min + 1)) + min;
        resultados[numero] = (resultados[numero] || 0) + 1;
      }

      resolve(resultados);
    } catch (error) {
      reject(error);
    }
  });
}

async function main() {
  console.log('Generando 10000 números aleatorios entre 1 y 20...');

  try {
    const resultado = await generarNumerosAleatorios(10000, 1, 20);
    console.log('Generación completada. Resultados:');
    console.log(resultado);
  } catch (error) {
    console.error('Error al generar números:', error);
  }
}

main();
console.log("Fin.")