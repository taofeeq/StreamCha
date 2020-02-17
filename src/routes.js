const express = require('express');
const bodyParser= require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
host : 'localhost',
user : 'root',
password : 'password', 
database : 'myDB' 
});


const app = express();
app.use(bodyParser.json({type: 'application/json'}))
app.use(bodyParser.urlencoded({extended: true}))
app.get('/MyGuests', function(req,res){
connection.getConnection(function (err, connection) {
connection.query('SELECT * FROM MyGuests', function(error,results,fields){
if (error) throw error;

// Getting the 'response' from the database and sending it to our route. This is were the data is.
res.send(results)

});
});
});

app.listen(3000, () => {
console.log('Go to http://localhost:3000/MyGuests');
});


