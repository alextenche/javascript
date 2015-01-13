<!DOCTYPE html>
<html>
<head>
	<>
</head>

<body>	
<?php
	$link = mysqli_connect("localhost","root","termopane","work");
	
	if (mysqli_connect_errno()) {
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	
	$result = mysqli_query($link,"SELECT * FROM articles");
	
	while($row = mysqli_fetch_array($result)){
		echo $row['id'] . " " . $row['title'] . " " . $row['body'] ;
		echo "<br>";
		echo "<br>";
		echo "<br>";
		
	}
		
	mysqli_close($link);
?>

  
  

</body>
</html>