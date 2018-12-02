<?php
	include('connect.php');

  if(isset($_POST["firstname"]))
  {

      $firstname = $_POST['firstname'];
      $lastname = $_POST['lastname'];
      $cpNum = $_POST['cpNum'];
      $email = $_POST['email'];
      $message = $_POST['message'];

      $sql = "insert into inquiry (date, firstname, lastname, cpNum, email, message)
      values (CURDATE(),'$firstname', '$lastname', '$cpNum', '$email', '$message')";

      if(mysqli_query($conn, $sql))
      {
           echo "Message Saved";
      }
}
	?>
