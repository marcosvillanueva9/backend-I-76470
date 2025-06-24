const temporizador = async (callback) => {
    return new Promise((resolve) => {
        console.log('Iniciando temporizador...');
        setTimeout(() => {
            callback();
            resolve();
        }, 5000);
    });
}

const saludar = () => {
  console.log('Hola, ¿cómo estás?');
}

async function main () {
    console.log('Inicio del programa');
    await temporizador(saludar);
    console.log('Fin del programa');
}

main();