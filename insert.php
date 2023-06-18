<?php

    echo '<script>consol.log("hi")</script>';

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db-test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}else{
    echo "hello world";
}

// $sql = "INSERT INTO user(username,email,password) values ('ashrafns', 'ashrafns@gmail.com', 123456)";
// $query = mysqli_query($conn,$sql);
?>