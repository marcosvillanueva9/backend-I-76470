import express from 'express'
import handlebars from 'express-handlebars'
import viewsRouter from './src/routes/views.router.js'

import { Server } from 'socket.io'

const app = express()
const PORT = 8080

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.static('./public'))

app.use('/', viewsRouter)

const server = app.listen(PORT, () => {
    console.log(`corriendo en el ${PORT}`)
})

const sockets = new Server(server)

const chatLog = []
let cantidadUsers = 0

sockets.on('connection', (socket) => {
    console.log('New client connected!')
    cantidadUsers++
    console.log(`users en linea: ${cantidadUsers}`)

    socket.on('mensajito', data => {
        chatLog.push({ userName: data.userName, message: data.message})
        sockets.emit('chatLog', chatLog)
    })

    socket.on('getChatLog', () => {
        sockets.emit('chatLog', chatLog)
    })

    socket.on('disconnect', () => {
        console.log('se desconecto un usuario')
        cantidadUsers--
        console.log(`users en linea: ${cantidadUsers}`)
    })

})