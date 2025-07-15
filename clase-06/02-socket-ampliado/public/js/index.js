const socket = io();

socket.emit('getChatLog')

let userName = '';

Swal.fire({
    title: 'Bienvenido al chat!',
    input: 'text',
    icon: 'info',
    inputValidator: (value) => {
        return !value && 'Tenes que poner un nombre para continuar!'
    },
    allowOutsideClick: false
}).then((result) => {
    if (result.isConfirmed) {
        userName = result.value
    }
})

const chatLogElement = document.getElementById('chat-log')
const chatForm = document.getElementById('chat-form')
const messageInput = document.getElementById('message')

chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = messageInput.value
    socket.emit('mensajito', { userName, message })
    messageInput.value = ''
})

socket.on('chatLog', (chatLog) => {
    chatLogElement.innerHTML = ''
    chatLog.forEach((obj) => {
        const li = document.createElement('li')
        li.textContent = `${obj.userName}: ${obj.message}`
        chatLogElement.appendChild(li)
    })
})