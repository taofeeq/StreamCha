<?php

$conn = new mysqli('sql204.unaux.com','unaux_24834628','gp6z22bgylnzo','unaux_24834628_myDB');

if($conn === false){
    die("ERROR: Could not connect. " . $conn->connect_error);
}

$sqlo = "CREATE TABLE IF NOT EXISTS MyGuests(
	name VARCHAR(30) NOT NULL,
	email VARCHAR(50),
	comments VARCHAR(65000),
	reg_date TIMESTAMP 
	)";


if ($conn->query($sqlo) === true) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

if(isset($_REQUEST['submit'])){
$name = $conn->real_escape_string($_POST['name']);
$email =$conn->real_escape_string($_POST['email']);
$Com = $conn->real_escape_string($_POST['Com']);
$new_datetime = DateTime::createFromFormat ( "Y-m-d H:i:s", $row["timestamp"] );
$sqla = "INSERT INTO MyGuests(name,email,comments,reg_date)VALUES
('$name','$email','$Com','$new_datetime')";

if($conn->query($sqla) === true){
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . $conn->error;
}
 

$conn->close();
}
?>

