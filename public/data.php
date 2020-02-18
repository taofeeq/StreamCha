<?php


$conn = new mysqli('sql204.unaux.com','unaux_24834628','gp6z22bgylnzo','unaux_24834628_myDB');

if($conn === false){
    die("ERROR: Could not connect. " . $conn->connect_error);
}
if(!empty($_POST)){
$name = $conn->real_escape_string($_POST['name']);
$email = $conn->real_escape_string($_POST['email']);
$comments = $conn->real_escape_string($_POST['comments']);
$time = date_create()->format('Y-m-d H:i:s');


$sql = "INSERT INTO MyGuests(name,email,comments)VALUES
('$name','$email','$comments')";

if($conn->query($sql) === true){
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . $conn->error;
}

$conn->close();
}
?>
