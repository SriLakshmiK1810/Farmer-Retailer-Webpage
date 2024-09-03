<?php
$firstname = $_POST['firstname'];
$password = $_POST['password'];
$phonenumber = $_POST['phonenumber'];

$conn = new mysqli('localhost','root','','test');
if($conn -> connect_error){
    die('Connection Failed:'. $conn -> connect_error);
}
else{
    $stmt = $conn -> prepare("insert into registration (firstname , password , phonenumber ) values(?,?,?)");
    $stmt -> bind_param("sss", $firstname , $password , $phonenumber);
    $stmt -> execute();
    header("Location:page2.html");
    $stmt -> close();
    $conn -> close();

}
?>
