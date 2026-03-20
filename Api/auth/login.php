<?php
session_start();
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

$user_id = $data['roll_number'];   // can be roll or email
$password = $data['password'];

// Step 1: Fetch user (without password condition)
$sql = "SELECT * FROM students 
        WHERE (roll_number = '$user_id' OR email = '$user_id')";
        
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    
    $row = mysqli_fetch_assoc($result);

    // Step 2: Verify encrypted password
    if (password_verify($password, $row['password'])) {

        $_SESSION['user'] = $user_id;

        echo json_encode([
            "status" => "success",
            "message" => "Login Successful"
        ]);

    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Wrong Password"
        ]);
    }

} else {
    echo json_encode([
        "status" => "error",
        "message" => "User not found"
    ]);
}
?>