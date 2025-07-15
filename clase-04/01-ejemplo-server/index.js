import http from 'http';

const server = http.createServer((request, response) => { // req, res
    response.end('Este es mi primer servidor en Node')
})

server.listen(8080, () => {
    console.log('Mi primer servidor esta escuchando en el 8080')
})