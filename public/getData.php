<?php
include 'config.php';

$sel = mysqli_query($con,"select * from MyGuests");
$data = array();

while ($row = mysqli_fetch_array($sel)) {
 $data[] = array("name"=>$row['name'],"email"=>$row['email'],"Com"=>$row['comments']);
}
echo json_encode($data);
?>