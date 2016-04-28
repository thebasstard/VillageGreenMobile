<?php
		header('Content-Type: application/json');
	
		$id = $_GET["query"];
		$db = new PDO("mysql:host=localhost;dbname=ludod;charset=utf8", "ludod", "grindrap");
		$requete = $db->query("select * from produit where ID_Produit='$id'");
		
		$tableau = $requete->fetchAll(PDO::FETCH_OBJ);
		//var_dump($tableau);
		echo json_encode($tableau); 
	
?>