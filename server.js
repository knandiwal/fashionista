var connect = require('connect');
var port = 4000;
connect.createServer(
    connect.static('www')
).listen(port);
console.log("listening on port: " + port);