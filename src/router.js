var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require('mysql');

var connection = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'password', 
database : 'myDB',
insecureAuth : true
});



app.get('/MyGuests',function(req,res){
function getData(callback){
   connection.query('SELECT * FROM MyGuests', function(error,results){
       console.log(results);
       return callback(error, results);
    })
}
});

io.on('connection',function(socket){
    socket.on("GET", function(data) {
       getData(function (error, result){
           socket.emit('serverSent', result);
       });
    });
});

app.listen(4000, () => {
   console.log("listening on PORT 3000");
});