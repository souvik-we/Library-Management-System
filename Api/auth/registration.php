<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

$roll = $data['roll_number'];
$name = $data['name'];
$email = $data['email'];
$dept = $data['department'];
$phone = $data['phone'];
$dob = $data['date_of_birth'];

// Default password = date of birth
$default_password = $dob;

// Encrypt password
$hashed_password = password_hash($default_password, PASSWORD_DEFAULT);

// Check if roll number already exists
$check = "SELECT * FROM students WHERE roll_number='$roll'";
$result = mysqli_query($conn, $check);

if (mysqli_num_rows($result) > 0) {
    echo "❌ Roll Number already exists!";
} else {

    $sql = "INSERT INTO students 
    (roll_number, name, email, department, phone, date_of_birth, password) 
    VALUES 
    ('$roll', '$name', '$email', '$dept', '$phone', '$dob', '$hashed_password')";

    if (mysqli_query($conn, $sql)) {
        echo "✅ Registration Successful! <br>";
        echo "👉 Default Password is your Date of Birth";
    } else {
        echo "❌ Error: " . mysqli_error($conn);
    }
}
?>