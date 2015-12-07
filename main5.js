var fs  = require("fs");

console.log("Going to get file info!");
fs.stat('input.txt',function(err,stats)
{
	if(err) { return console.error(err);}
	console.log(stats);
	console.log("Got file into successflly!");

	// Check file type
	console.log("isfile?" , + stats.isFile());
	console.log("is directory ? " + stats.isDirectory());
	console.log("isBlockDevice ? " + stats.isBlockDevice());
	console.log("is Character Device ? " + stats.isCharacterDevice());
	console.log("isSymbolicLink ? " + stats.isSymbolicLink());
	// console.log("isFIFO ? "  + stats.isFiFO());
	console.log("isSocket ?" + stats.isSocket());

})