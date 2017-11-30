<?php
// get database connection
include_once 'config/database.php';

// Display events
function getEvent(){
  $database = new Database();
  $db = $database->getConnection();

  $statement=$db->prepare("SELECT * FROM event");
  $statement->execute();
  $results=$statement->fetchAll(PDO::FETCH_ASSOC);
  $json=json_encode($results);
  echo $json;
}

// Execute
getEvent();

?>
