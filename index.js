// write your code here
const http = require('http');
//importing code from the http module(library)
http.createServer(function(req,res) {
console.log('got a request, send response now');
//create and configure response
res.writeHead(200,{ 'Content-Type': 'text/plain'});
//Write body response
res.write('Hello World');
//Send response
res.end();

//Make the server listen on port 8080
}).listen(8080);
console.log("Listening on port 8080");