<?php
$q = $_GET['term'];
 
$link = mysqli_connect('localhost', 'root','','testing');

$query = "SELECT name FROM states WHERE name LIKE '$q%'";
$result = mysqli_query($link, $query);

$data = array();

while ($row = mysqli_fetch_array($result)){
	$data[] = array('value'=>$row['name']);

}

echo json_encode($data);
?>