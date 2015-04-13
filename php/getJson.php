<?php
	$str = file_get_contents('data2.json');
	echo json_decode($str, true);
?>