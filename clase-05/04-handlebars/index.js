import express from 'express';
import handlebars from 'express-handlebars'
import usersRouter from './src/router/users.router.js'
import petsRouter from './src/router/pets.router.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', './src/views')

app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)

app.listen(PORT, () => {
    console.log('Mi primer servidor esta escuchando en el 8080')
})