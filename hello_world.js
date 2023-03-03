// var http = require("http");

// http.createServer(function (request, response) {
//     // response.writeHead(200, { 'Content-Type': 'text/plain' })
//     response.write("My own server")
//     response.end()
// }).listen(8081);
// console.log('Server running at http://127.0.0.1:8081/');


// Blocking code example 
// The first example shows that the program blocks until it reads the file and then only it proceeds to end the program.
// var fs = require("fs");
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("Program Ended");


// Non-Blocking code example   
// The second example shows that the program does not wait for file reading and proceeds to print "Program Ended" and at the same time, the program without blocking continues reading the file.
var fs = require("fs");
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("Program ended");