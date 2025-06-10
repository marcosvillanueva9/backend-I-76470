class Contador {

    static contadorGlobal = 0;

    constructor(nombre) {
        this.nombre = nombre;
        this.contador = 0;
    }

    getResponsable() {
        return this.nombre
    }

    contar() {
        this.contador++
        Contador.contadorGlobal++
    }

    getCuenta() {
        return this.contador
    }

    static getCuentaGlobal() {
        return Contador.contadorGlobal
    }
}

const maia = new Contador('Maia');
const eugenio = new Contador('Eugenio');
const jorge = new Contador('Jorge');
const alex = new Contador('Alex');

maia.contar()
maia.contar()
maia.contar()

eugenio.contar()
eugenio.contar()

jorge.contar()
jorge.contar()

alex.contar()

// resultados
console.log(`El responsable ${maia.getResponsable()} conto ${maia.getCuenta()} veces`)
console.log(`El responsable ${eugenio.getResponsable()} conto ${eugenio.getCuenta()} veces`)
console.log(`El responsable ${jorge.getResponsable()} conto ${jorge.getCuenta()} veces`)
console.log(`El responsable ${alex.getResponsable()} conto ${alex.getCuenta()} veces`)

console.log(`En total todos los responsables, contaron ${Contador.getCuentaGlobal()} veces`)