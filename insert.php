<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
    // echo '<script>consol.log("hi")</script>';

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

    // echo "hello world";
}

$request = json_decode( file_get_contents('php://input') );

if(isset($request)){

  // $sql = "INSERT INTO user(id,firstName,lastName,email,password,profileImage,registerDate) values (null, :firstName, :lastName, :email, :password, :profileImage, :registerDate)";
  $sql = "INSERT INTO `user` (`userID`, `firstName`, `lastName`, `email`, `password`, `profileImage`, `registerDate`) VALUES (NULL, 'fdghdtf', 'sgsdths', 'dhyjh', 'dtherth', 'sbhshsdhshs', current_timestamp())";
  $stmt = $conn->prepare($sql);
  $registerDate = date("Y-m-d");
  $stmt->bind_param('ssssss',
   $request->firstName, 
   $request->lastName, 
   $request->email, 
   $request->password, 
   $request->profileImage, 
   $request->registerDate);

  if($stmt->execute()){
    $response = ["status" => 1, "message" => 'recored created successfully.'];
  } else {
    $response = ["status" => 0, "message" => 'recored creation failed.'];
  }
}

?>
<!-- if(isset($request)){
  $sql = "INSERT INTO user(firstName, lastName, email, password, profileImage, registerDate) VALUES (?, ?, ?, ?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ssssss', $request->firstName, $request->lastName, $request->email, $request->password, $request->profileImage, $request->registerDate);
  if($stmt->execute()){
    $response = ["status" => 1, "message" => 'recored created successfully.'];
  } else {
    $response = ["status" => 0, "message" => 'recored creation failed.'];
  }
} -->
