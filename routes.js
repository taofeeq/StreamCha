const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const connection = mysql.createPool({
host : 'localhost',
user : 'root',
password : 'password', 
database : 'myDB',
insecureAuth : true
});

const app = express();

app.use(cors());
app.get('/MyGuests', function(require,response){
connection.getConnection(function(err,connection){
connection.query('SELECT * FROM MyGuests', (error,results) =>{
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

app.listen(3000, () => {
console.log('Go to http://localhost:3000/MyGuests');
});


