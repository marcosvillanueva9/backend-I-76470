
async function calculos(a, b) {
    const { default: Calculadora } = await import('./calculadora.js');
    const calculadora = new Calculadora();
    const suma = calculadora.sumar(a, b);
    console.log(`La suma de ${a} y ${b} es: ${suma}`);
    const resta = calculadora.restar(a, b);
    console.log(`La resta de ${a} y ${b} es: ${resta}`);
    return 
}

calculos(5, 3)
    .then(() => console.log('Cálculos completados'))
    .catch(error => console.error('Error en los cálculos:', error));