<?php 

$name = $_POST['phpname'];
$password = $_POST['phppassword'];

if($name && $password){
	echo "You are logged in.";
} else {
	echo "You have to type a name and password.";
}
?>