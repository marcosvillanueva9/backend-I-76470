import express from 'express'

const app = express()

app.use(express.json())

let fraseInicial = "Esta es la frase inicial con la que vamos a arrancar"

app.get('/api/frase', (req, res) => {
    res.json({
        frase: fraseInicial
    })
})

app.get('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params
    const palabras = fraseInicial.split(' ')
    if (pos <= 0 || pos > palabras.length) {
        return res.status(400).json({ error: 'posicion no permitida' })
    }

    res.json({ buscada: palabras[pos - 1]})
})

app.post('/api/palabras', (req, res) => {
    const { palabra } = req.body
    if (!palabra) {
        return res.status(400).json({ error: 'falta la palabra para agregar' })
    }

    const palabras = fraseInicial.split(' ')
    palabras.push(palabra)
    fraseInicial = palabras.join(' ')
    res.status(201).json({
        agregada: palabra,
        pos: palabras.length
    })
})

app.put('/api/palabras/:pos', (req, res) => {
    const { palabra } = req.body
    const { pos } = req.params
    if (!palabra || !pos) {
        return res.status(400).json({ error: 'falta la palabra para agregar o la posicion' })
    }

    const palabras = fraseInicial.split(' ')
    if (pos <= 0 || pos > palabras.length) {
        return res.status(400).json({ error: 'posicion no permitida' })
    }

    const anterior = palabras[pos - 1]
    palabras[pos - 1] = palabra
    fraseInicial = palabras.join(' ')
    res.status(202).json({
        actualizada: palabra,
        anterior
    })
})

app.delete('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params
    if (!pos || isNaN(pos)) {
        return res.status(400).json({ error: 'falta la posicion' })
    }

    const palabras = fraseInicial.split(' ')
    if (pos <= 0 || pos > palabras.length) {
        return res.status(400).json({ error: 'posicion no permitida' })
    }

    palabras.splice(pos - 1, 1)
    fraseInicial = palabras.join(' ')
    res.send('palabra eliminada correctamente')
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`el servidor esta corriendo existosamente en el puerto ${PORT}`)
})