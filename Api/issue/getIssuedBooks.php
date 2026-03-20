<?php
header("Access-Control-Allow-Origin: *");

include("../config/db.php");

$sql = "SELECT issue_books.*, books.title, students.name 
FROM issue_books
JOIN books ON issue_books.book_id = books.id
JOIN students ON issue_books.student_roll_no = students.roll_no";

$result = mysqli_query($conn,$sql);

$data=[];

while($row=mysqli_fetch_assoc($result)){
 $data[]=$row;
}

echo json_encode($data);
?>