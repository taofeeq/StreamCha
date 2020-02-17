var app = require('http').createServer(handler)
      , io = require('socket.io').listen(app)
      , fs = require('fs')
      , mysql = require('mysql')

    var client = mysql.createConnection({
              host : 'localhost',
user : 'root',
password : 'password', 
database : 'myDB',
insecureAuth : true
    });

    client.connect();

    app.listen(3000);

    function handler (req, res) {
      fs.readFile(__dirname + '/index.html',
      function (err, data) {
        if (err) {
          res.writeHead(500);
          return res.end('Error loading index.html');
        }

        res.writeHead(200);
        res.end(data);
      });
    }

    io.sockets.on('connection', function (socket) {
        socket.on('login', function(usr, pass){
            var TEST_DATABASE = 'mysqltest';
            var TEST_TABLE = 'users';

            client.query('USE '+TEST_DATABASE);

            client.query('SELECT * FROM MyGuests', function(err, results) {
              if (err) throw err;
              console.log(results); // [{1: 1}]
              socket.emit('retuLogIn',results);
            });

        });
        socket.on('disconnect', function(){
            console.log('Server has disconnected');
        });
    });