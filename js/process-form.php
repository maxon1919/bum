<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Gather form data
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $phone_number = $_POST['phone_number'];
    $message = $_POST['message'];

    // Create the email message
    $to = 'lubegam054@gmail.com'; // Replace with your email address
    $subject = 'New Contact Form Submission';
    $message_body = "Full Name: $full_name\nEmail: $email\nPhone Number: $phone_number\nMessage: $message";
    $headers = "From: $email";

    // Send the email
    $success = mail($to, $subject, $message_body, $headers);

    if ($success) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
} else {
    echo json_encode(['success' => false]);
}
?>
