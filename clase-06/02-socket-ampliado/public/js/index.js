const socket = io();

let userName = '';

Swal.fire({
  title: 'Welcome to the Chat!',
  input: 'text',
  text: 'Please enter your name to start chatting.',
  icon: 'info',
  inputValidator: (value) => {
    return !value && 'You need to enter a name to continue!';
  },
  allowOutsideClick: false,
}).then((result) => {
  if (result.isConfirmed) {
    userName = result.value;
  }
});

socket.emit('getChatLog');

const chatLogElement = document.getElementById('chat-log');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message');

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = messageInput.value;
  socket.emit('message', { userName, message });
  messageInput.value = '';
});

socket.on('chatLog', (chatLog) => {
  chatLogElement.innerHTML = '';
  chatLog.forEach((msg) => {
    const li = document.createElement('li');
    li.textContent = `${msg.userName}: ${msg.message}`;
    chatLogElement.appendChild(li);
  });
});