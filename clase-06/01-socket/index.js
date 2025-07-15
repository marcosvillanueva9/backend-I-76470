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

sockets.on('connection', (socket) => {
    console.log('New client connected!')

    socket.on('mensajito', message => {
        chatLog.push({ socketId: socket.id, message})
        sockets.emit('chatLog', chatLog)
    })

})