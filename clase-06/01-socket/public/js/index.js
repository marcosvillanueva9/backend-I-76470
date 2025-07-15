const socket = io();

const chatLogElement = document.getElementById('chat-log');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message');

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = messageInput.value;
  socket.emit('message', message);
  messageInput.value = '';
});

socket.on('chatLog', (chatLog) => {
  chatLogElement.innerHTML = '';
  chatLog.forEach((msg) => {
    const li = document.createElement('li');
    li.textContent = `${msg.socketId}: ${msg.message}`;
    chatLogElement.appendChild(li);
  });
});
