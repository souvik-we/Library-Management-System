<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("../config/db.php");

$title = $_GET['title'] ?? null;
$category = $_GET['category'] ?? null;

$sql = "SELECT books.*, categories.name AS category_name
        FROM books
        JOIN categories ON books.category_id = categories.id
        WHERE 1=1";

if($title){
 $sql .= " AND books.title LIKE '%$title%'";
}

if($category){
 $sql .= " AND categories.name LIKE '%$category%'";
}

$result = mysqli_query($conn,$sql);

$data = [];

while($row = mysqli_fetch_assoc($result)){
 $data[] = $row;
}

echo json_encode($data);
?>