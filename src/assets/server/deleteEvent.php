<?php
// get database connection
include_once 'config/database.php';

// Delete event
function deleteEvent(){
  $database = new Database();
  $db = $database->getConnection();

  // get posted data
  $data = json_decode(file_get_contents("php://input"));
  $name = $data->name;
  $date = $data->date;

  $statement=$db->prepare("DELETE FROM event WHERE name=:name AND date=:date");
  $statement->bindParam(":name", $name);
  $statement->bindParam(":date", $date);
  $statement->execute();
}

// Execute
deleteEvent();

?>
