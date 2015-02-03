<?php

	$name      = &$_POST['name'];
	$email     = &$_POST['email'];
	$password  = &$_POST['pass1'];
	$cpassword = &$_POST['pass2'];

	if($name && $email && $password && $cpassword){

		$link = mysqli_connect('localhost','root','','testsite');

		mysqli_query($link, "INSERT INTO users(name,email,password) VALUES('$name','$email','$cpassword')");

		echo 1;
	} else {
		echo 'not allowed';
	}


?>