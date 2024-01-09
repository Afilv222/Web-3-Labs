<?php
define('DBHOST', 'localhost');
define('DBNAME', 'art');
define('DBUSER', 'root');
define('DBPASS', '');
//define('DBCONNSTRING','sqlite:./databases/art.db');
//define('DBCONNSTRING','sqlite:./databases/security.db');
define('DBCONNSTRING',"mysql:host=" . DBHOST . ";dbname=" . DBNAME . ";charset=utf8mb4;");

$connectionDetails = Array(DBCONNSTRING,DBUSER,DBPASS);
?>