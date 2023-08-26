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

  $sql = "INSERT INTO user(id,firstName,lastName,email,password,profileImage,registerDate) values (null, :firstName, :lastName, :email, :password, :profileImage, :registerDate)";
  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':firstName', $request->firstName);
  $stmt->bindParam(':lastName', $request->lastName);
  $stmt->bindParam(':email', $request->email);
  $stmt->bindParam(':password', $request->password);
  $stmt->bindParam(':profileImage', $request->profileImage);
  $stmt->bindParam(':registerDate', $request->registerDate);

  if($stmt->execute()) {
    $response = ['status' => 1, 'message' => 'Record created successfully.'];
} else {
    $response = ['status' => 0, 'message' => 'Failed to create record.'];
}
}

?>
