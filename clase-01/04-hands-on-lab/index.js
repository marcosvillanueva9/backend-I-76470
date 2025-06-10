function MostrarLista(arr) {

    // si viene vacia, devolver que esta vacia
    if (arr.length === 0) {
        return 'La lista esta vacia'
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }

    return `La longitud de la lista es de: ${arr.length}`
}

const lista1 = [10, 4, 2, 8]
const mensaje = MostrarLista(lista1)

console.log(mensaje)

const lista2 = []
const mensaje2 = MostrarLista(lista2)

console.log(mensaje2)