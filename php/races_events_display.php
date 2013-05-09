<?php
	$con = mysql_connect("168.63.249.136","root","jahrakal");
	$dbs = mysql_select_db("irace", $con);
	
	$selected=$_GET['events_race_id'];
	
	$sth = mysql_query("SELECT `race_id`,`race_title`,`race_date`,`race_location`,`race_distances`, `race_photo`, `race_description`, `race_reg_date`, `race_how_to_register`, `race_contact`, `race_organizer`, `race_status` FROM `races` where race_status = 0 and race_id ='$selected'");
	$rows = array();
	while($r = mysql_fetch_assoc($sth))
	{
    $rows[] = $r;
	}
	$output_json = json_encode($rows);
	//echo "<json_display>";
	$json_string = "{\"reg\":$output_json}";
		//echo "{";
		//echo"\"";
		//echo "reg";
		//echo "\"";
		//echo ":";
		//echo json_encode($rows);
		//echo "}";
	//echo "</json_display>";
	echo $json_string;
?>
