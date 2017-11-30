<?php
// get database connection
include_once 'config/database.php';

// Display events
function getComments(){
  $database = new Database();
  $db = $database->getConnection();

  $statement=$db->prepare("SELECT * FROM comment ORDER BY id DESC");
  $statement->execute();
  $results=$statement->fetchAll(PDO::FETCH_ASSOC);
  $json=json_encode($results);
  echo $json;
}

// Execute
getComments();

?>
