<?php


$conn= new mysqli('localhost','root','','test')or die("Could not connect to mysql".mysqli_error($con));


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$firstname = $_POST['firstname'];
$password = $_POST['password'];


$query = "SELECT * FROM registration WHERE firstname = '$firstname' AND password = '$password'";
$result = $conn->query($query);


if ($result->num_rows > 0) {
    
    header("Location: page5.php");
    exit;
} else {
    
    header("Location: 404.php");
    exit;
}

$conn->close();

?>
