/* eslint-disable no-console */
const http = require('http');
const server = http.createServer();
server.listen(8080);
server.on('request',(req,res)=> {
  res.write('Hello world http!!\n');
  setTimeout(()=>{
    res.write('Streaming now');
    res.end();
  },3000);
});