<?php
	$callback = $_GET['onload'];
	$json = '({
		"table" : [
			{
				"id": "1",
				"col1": "数据行1列1",
				"col2": "数据行1列2"
			},{
				"id": "2",
				"col1": "数据行2列1",
				"col2": "数据行2列2"
			},{
				"id": "3",
				"col1": "数据行3列1",
				"col2": "数据行3列2"
			}
		]
	})';
	echo $callback.$json;
?>
