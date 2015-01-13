<?php 

$name = &$_POST['names'];
$email = &$_POST['emails'];


if($name != ''){
	$link = mysqli_connect('localhost','root','','testsite');

	$username = mysqli_query($link, "SELECT name FROM users WHERE name='$name'");
	$count = mysqli_num_rows($username);

	if($count != 0){
		echo 1;
	} else {
		echo 0;
	}
}

if($email!=''){
	$link = mysqli_connect('localhost','root','','testsite');

	$useremail = mysqli_query($link, "SELECT email FROM users WHERE email='$email'");
	$counte = mysqli_num_rows($useremail);

	if($counte != 0){
		echo 1;
	} else {
		echo 0;
	}
}

?>