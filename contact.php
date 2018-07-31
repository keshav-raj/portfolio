<?php

$myemail  = "keshavkumark7@gmail.com";
$yourname = check_input($_POST['yourname'], "Enter your name");
$email  = check_input($_POST['email'], "Enter your email");
$subject  = check_input($_POST['message'], "Write a subject");

$message = "Hello!

Your contact form has been submitted by:

Name: $yourname
E-mail: $email
Message: $subject 

End of Message
";

mail($myemail, $message);
?>