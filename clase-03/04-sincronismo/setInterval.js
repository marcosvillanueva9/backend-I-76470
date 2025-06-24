let contador = () => {
    let counter = 1;
    console.log("Realizando operación...");
    let timer = setInterval(() => {
        console.log(`Contador: ${counter++}`);
        if(counter >= 10) {
            clearInterval(timer);
        }
    }, 1000);
}

console.log("Inicio del programa");
contador();
console.log("Fin del programa");