import http from 'http';

const server = http.createServer((req, res) => {
    
    if (req.method === 'GET' && req.url === '/saludo') {
        res.writeHead(200)
        res.end('Hola a todos')
    } if (req.method === 'POST' && req.url === '/saludo') {

    } else {
        res.writeHead(404)
        res.end('Esta url no esta definida en nuestro servidor')
    }
})

server.listen(8080, () => {
    console.log('Mi primer servidor esta escuchando en el 8080')
})