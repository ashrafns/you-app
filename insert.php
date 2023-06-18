<?php
    echo '<script>consol.log("hi")</script>';

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db-test";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}else{

    echo "hello world";
}

$postdata = file_get_contents("php://input");

// if(isset($postdata)){
  $request = json_decode($postdata);

  print_r($request);

//   $username = $request->$username;
//   $email = $request->$email;
//   $password = $request->$password;

//   $sql = "INSERT INTO user(username,email,password) values ('{$username}', '{$email}', '{$password}')";
//   if(mysqli_query($conn,$sql))
//   {
//     http_response_code(201);
//   }

// }

?>
