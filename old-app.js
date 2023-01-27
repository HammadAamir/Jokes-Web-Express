const fs = require('fs')
const http = require('http');
const { setUncaughtExceptionCaptureCallback } = require('process');

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        fs.readFile('./public/index.html', (err, data) => {
            if (err) res.write("<h1>404 not found.</h1>");
            else res.write(data);
            res.end();
        })
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

