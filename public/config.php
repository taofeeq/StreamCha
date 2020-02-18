<?php

$host = "sql204.unaux.com"; /* Host name */
$user = "unaux_24834628"; /* User */
$password = "gp6z22bgylnzo"; /* Password */
$dbname = "unaux_24834628_myDB"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}