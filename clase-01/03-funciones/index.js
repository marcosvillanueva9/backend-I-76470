function armarUsuario(nombre, edad, mail) {
    if (edad < 18) {
        return 'No se puede crear siendo menor de edad'
    }

    const user = {
        nombre: nombre,
        edad: edad,
        mail: mail
    }

    return user
}

function saludar(nombre) {
    console.log('Hola')
    console.log('mi nombre es')
    console.log(nombre)
}

const sumar = (num1, num2) => {
    const resultado = num1 + num2
    return resultado
}

saludar('Alex')

const sumaResultado = sumar(10, 5)

console.log(sumaResultado)

const newUser = armarUsuario('Jorge', 30, 'jorge@enrique.com')
console.log(newUser)

const newUser2 = armarUsuario('Pepe', 17, 'pepe@pepe.com')
console.log(newUser2)