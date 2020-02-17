var mysql = require('mysql');
var http    = require('http').Server(app);
var io      = require('socket.io')(http);
console.log("Started running Sockets");

var db= mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'password', 
database : 'myDB',
insecureAuth : true
});

db.connect(function(err){
   if(err) console.log(err)
});

var notes = [];
var isInitNotes = false;
var socketCount =0;

http.listen(3000,function(){
    console.log("Listening on 3000");
});

io.sockets.on('connection', function(socket){
socketCount++;
io.sockets.emit('users connected', socketCount);
socket.on('disconnect', function(){
socketCount--;
io.sockets.emit('users connected', socketCount)
})

if (! isInitNotes){
 db.query('SELECT * FROM MyGuests')
 .on('result', function(data){
   notes.push(data)
  })
 isInitNotes = true
}else{
socket.emit('initial notes', notes)
}


})