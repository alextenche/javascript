<?php 

header('Content-type: application/json'); 

$people = array(
	'Alex' => array(
		'age'=>36,
		'location'=>'Timisoara',
		'job'=>'none',
		'dob'=>'24/07/1978'
		),
	'Joshua' => array(
		'age'=>21,
		'location'=>'Buzias',
		'job'=>'web developer',
		'dob'=>'24/07/1978'
		),
	'Blade' => array(
		'age'=>35,
		'location'=>'US',
		'job'=>'day walker',
		'dob'=>'24/07/1978'
		)
	);

$return = array('exists'=>false);

if(isset($_GET['name'])){
	$name = trim($_GET['name']);
	if(isset($people[$name])){
		$return['exists'] = true;
		$return['information'] = $people[$name];
	}
}

echo json_encode($return);