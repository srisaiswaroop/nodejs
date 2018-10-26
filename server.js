var http = require('http');
var requestHanlder = (request, response) => {
	console.log('hereee', request);
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	if (request.url == '/test') {
		response.end('Hello Test\n');
	} else {
		response.end('Hello World\n');
	}
};
var server = http.createServer(requestHanlder);
server.listen(3000);
