<?php
// get database connection
include_once 'config/database.php';

// Display events
function getEvent(){
  $database = new Database();
  $db = $database->getConnection();

  // get posted data
  $data = json_decode(file_get_contents("php://input"));
  $name = $data->name;
  $date = $data->date;

  $statement=$db->prepare("SELECT * FROM event WHERE name=:name AND date=:date");
  $statement->bindParam(":name", $name);
  $statement->bindParam(":date", $date);
  $statement->execute();

  $results=$statement->fetchAll(PDO::FETCH_ASSOC);
  $json = json_encode($results);
  echo $json;
}

// Execute
getEvent();

?>
