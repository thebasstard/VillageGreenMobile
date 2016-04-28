<?php 
		header('Content-Type: application/json');
	
		$mot = $_GET["query"];
		$db = new PDO("mysql:host=localhost;dbname=ludod;charset=utf8", "ludod", "grindrap");
		$requete = $db->query("select * from produit where Lib_C like '%$mot%' union select * from produit where Ref_Fournisseur like '%$mot%' union select * from produit where Lib_L like '%$mot%'");
		
		$tableau = $requete->fetchAll(PDO::FETCH_OBJ);
		//var_dump($tableau);
		echo json_encode($tableau); 
?>