<?php

	$firstname = $_[`firstname`];
	$lastname = $_[`lastname`];
	$email = $_[`email`];
	$number = $_[`number`];
	$gender = $_[`gender`];
	$password = $_[`password`];

	$conn = new mysqli('localhost','root','','meu_site');
	if($conn->connect_error){
		die('Connection failed : '.$conn->connect_error);
	}
	else{
	$stmt = $conn->prepare("insert into registration(firstname, lastname, email, number, gender, password)
                       values(?, ?, ?, ?, ?, ?) ");
	$stmt->bind_param("sssssi",$firstname, $lastname, $email, $number, $gender, $password);
	$stmt->execute();
	echo "Registro bem sucedido"
	$stmt->close();
	$conn->close();
	}

?>

