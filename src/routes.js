const app       =     require("express")();
const express = require('express');
const server = require('http').createServer(app);
const cors = require('cors');
const mysql = require('mysql');
var io        =     require("socket.io")(server);

const connection = mysql.createPool({
host : 'localhost',
user : 'root',
password : 'password', 
database : 'myDB',
insecureAuth : true
});

//const app = express();



app.use(cors());

const request = require('request');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/MyGuests', function(require,response){
connection.getConnection(function(err,connection){
connection.query('SELECT *, date_format(reg_date,"%d-%m-%Y %h:%m %p") as date_time FROM myDB.MyGuests;', (error,results) =>{
if (err) {
return response.send(err)
}
else{
return response.json({
 data: results
})
}
});
});
});


server.listen(4000, () => {
console.log('Go to http://localhost:4000');
});


