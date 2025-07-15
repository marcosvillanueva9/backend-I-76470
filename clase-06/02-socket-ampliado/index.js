import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';

import viewsRouter from './src/routes/views.router.js';

const app = express();
const PORT = 8080;

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('./public'));

app.use('/', viewsRouter);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const chatLog = [];

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('New client connected');

    socket.on('message', (data) => {
        chatLog.push({ userName: data.userName, message: data.message });
        io.emit('chatLog', chatLog);
    });

  socket.on('getChatLog', () => {
    socket.emit('chatLog', chatLog);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});