<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("../config/db.php");

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];
$title = $data['title'];

$sql = "UPDATE books SET title='$title' WHERE id=$id";

mysqli_query($conn,$sql);

echo json_encode(["status"=>"updated"]);
?>