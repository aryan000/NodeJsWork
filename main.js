// importing required module 
/* We use require directive to load http module and store returned HTTP instance into http variable as follows */

var http = require("http");

// Now Creating Server
/* At next step we use created http instance
 and call http.createServer() method to create server 
 instance and then we bind it at port 8081 using listen 
 method associated with server instance. Pass it a function 
 with parameters request and response.
 Write the sample implementation to always return "Hello World".
 */



http.createServer(function(request,response)
{
	// Send the HTTP header
	// Http Status  : 200: OK
	// Content Type : text/plain
	response.writeHead(200,{'Content-Type': 'text/plain'});
	// Send the response body as "Hello World"
	response.end("Hello World\n");
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081');

















console.log("Hello , World!")