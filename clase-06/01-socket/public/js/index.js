const socket = io();

const chatLogElement = document.getElementById('chat-log')
const chatForm = document.getElementById('chat-form')
const messageInput = document.getElementById('message')

chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = messageInput.value
    socket.emit('mensajito', message)
})

socket.on('chatLog', (chatLog) => {
    chatLogElement.innerHTML = ''
    chatLog.forEach((obj) => {
        const li = document.createElement('li')
        li.textContent = `${obj.socketId}: ${obj.message}`
        chatLogElement.appendChild(li)
    })
})