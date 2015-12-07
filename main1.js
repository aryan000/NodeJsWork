

var fs = require("fs");
var data = fs.readFile('input.txt',function(err,data){
	if(err) return console.eror(err);
     console.log(data.toString());	
});


console.log("Program Ended");

