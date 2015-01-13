<?php header('Content-type: application/json'); 

$results = array(
	"count" => 10,
	"results" => array("Result one", "Result Two", "Result three")
	);

echo json_encode($results);?>