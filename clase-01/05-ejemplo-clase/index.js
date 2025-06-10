class Persona {

    static contadorPersonas = 0;

    constructor(newNombre) {
        this.nombre = newNombre
        Persona.contadorPersonas++
    }

    static getContador() {
        return Persona.contadorPersonas
    }

    saludar() {
        console.log(`Hola! Mi nombre es ${this.nombre}`)
    }
}

const persona1 = new Persona('Eugenio')
persona1.saludar()
const persona2 = new Persona('Jorge')
persona2.saludar()
console.log(Persona.getContador())