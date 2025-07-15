import express from 'express';
import usersRouter from './src/router/users.router.js'
import petsRouter from './src/router/pets.router.js'

const app = express()
const PORT = 8080

app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)

app.listen(PORT, () => {
    console.log('Mi primer servidor esta escuchando en el 8080')
})