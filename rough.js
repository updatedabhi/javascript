const os = require('os');
const http = require('http');
const freemem = os.freemem();
console.log(freemem);

const server = http.createServer((req, res)=> {
  res.end(+freemem);
})

server.listen(2333);