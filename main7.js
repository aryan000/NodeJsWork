var fs = require("fs");

console.log("Going to write into existing file");

fs.writeFile('input.txt','Simple Easy Learnign!',function (err)
{
	if(err) { return console.error(err);}

	console.log("Data written Successfully!");
	console.log("Let's read newly written data");
	fs.readFile('input.txt',function(err)
	{
		if(err) { return console.error(err); }
	});
});	