<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("../config/db.php");

$data = json_decode(file_get_contents("php://input"), true);

$title = $data['title'];
$author = $data['author'];
$category_id = $data['category_id'];
$isbn = $data['isbn'];
$total = $data['total'];

$available = $total;

$sql = "INSERT INTO books(title,author,category_id,isbn,total,available,created_at)
VALUES('$title','$author','$category_id','$isbn','$total','$available',NOW())";

if(mysqli_query($conn,$sql)){
 echo json_encode(["status"=>"success"]);
}else{
 echo json_encode(["status"=>"error"]);
}
?>