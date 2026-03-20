<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("../config/db.php");

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];
$role = $data['role'];

if($role !== "admin"){
 echo json_encode(["status"=>"Access denied"]);
 exit();
}

$sql = "DELETE FROM books WHERE id=$id";

mysqli_query($conn,$sql);

echo json_encode(["status"=>"deleted"]);
?>