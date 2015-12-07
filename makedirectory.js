// making a directory

var fs  = require("fs");

console.log("Going to create director /tmp/test");

fs.mkdir('/tmp/test',function(err)
{
	 if(err) { return console.error(err);}

	 console.log("Director created successfully!");
});