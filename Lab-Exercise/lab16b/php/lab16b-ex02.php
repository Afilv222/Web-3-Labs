<?php
// be sure to examine this include file to ensure connection string to database is correct for your development environment


?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Chapter 16b</title>
<link rel="stylesheet" href="css/variables-palette-19.css" />   
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/lab16b-ex02.css" />
</head>
<body>
   <section class="container">
      <div class="formData">
         <h2>Login</h2>
         <p><?= $msg ?></p>         
         <form method="post" action="lab16b-ex02.php">
            <label for="email">Email</label>
            <input type="email" name="email" >
            <label for="pass">Password</label>
            <input type="password" name="pass" >                            
            <input type="submit" value="Login" />            
         </form>
      </div>
   </section>
</body>
</html>