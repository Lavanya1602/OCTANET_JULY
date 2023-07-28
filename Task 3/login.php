<?php
session_start(); // start a new session

// check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// get the user input
	$username = $_POST["username"];
	$password = $_POST["password"];

	// validate the user input
	if (empty($username) || empty($password)) {
		// if the username or password is empty, display an error message
		echo "Please enter your username and password.";
	} else {
		// if the username and password are not empty, check if they are valid
		// (you would need to implement a database query here to check if the username and password are valid)
		if ($username == "demo" && $password == "password") {
			// if the username and password are valid, set the session variables and redirect to the home page
			$_SESSION["username"] = $username;
			header("Location: home.php");
			exit();
		} else {
			// if the username and password are not valid, display an error message
			echo "Invalid username or password.";
		}
	}
}
?>
