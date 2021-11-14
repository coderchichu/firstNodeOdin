const http = require('http')
const fs = require('fs')

const port = 3000;

// const page404 = fs.readFile('./404.html', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//         data
// })

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html')

    let path = './'
    switch(req.url) {
        case '/':
            path += 'index.html'
            break
        case '/about':
            path += 'about.html'
            break
        case '/contact-me':
            path += 'contact-me.html'
            break
        default:
            path += '404.html'
            break
    }

    fs.readFile(path, function (error, data) {
        if (error) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end();
        }
    })
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})