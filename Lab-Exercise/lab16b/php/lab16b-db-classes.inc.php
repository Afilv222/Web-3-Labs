<?php
class DatabaseHelper {

    /*  This function returns a connection object to a database   */
    public static function createConnection( $values=array() ) {
        $connString = $values[0];
        $user = $values[1];
        $password = $values[2];
        $pdo = new PDO($connString,$user,$password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $pdo;
    }

    /*
    This function runs the specified SQL query using the 
    passed connection and the passed array of parameters (null if none)
    */
    public static function runQuery($connection, $sql, $parameters=array())     {
        // Ensure parameters are in an array
        if (!is_array($parameters)) {
            $parameters = array($parameters);
        }

        $statement = null;
        if (count($parameters) > 0) {
            // Use a prepared statement if parameters 
            $statement = $connection->prepare($sql);
            $executedOk = $statement->execute($parameters);
            if (! $executedOk) throw new PDOException;
        } else {
            // Execute a normal query     
            $statement = $connection->query($sql); 
            if (!$statement) throw new PDOException;
        }
        return $statement;
    }   
}

class CustomerLogonDB {
    private static $baseSQL = "SELECT CustomerID, UserName, Pass, Salt, Password_sha256, DateJoined, DateLastModified FROM customerlogon ";

    public function __construct($connection) {
        $this->pdo = $connection;
    }

    public function getByUserName($username) {
        $sql = self::$baseSQL . ' WHERE UserName=?';
        $statement = DatabaseHelper::runQuery($this->pdo, $sql, Array($username));
        return $statement->fetch();
    }   
    
    // add method for updating the password field
    

}


?>