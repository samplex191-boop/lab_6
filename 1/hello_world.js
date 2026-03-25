var http = require('http');
 
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
 
    res.write('<h1>Hello, World!</h1>');
    res.write('<p>Welcome to my first Node.js Server!</p>');

    res.end();
 
}).listen(3000);
 
console.log('Server is running at http://localhost:3000');
console.log('Press Ctrl+C to stop the server.');