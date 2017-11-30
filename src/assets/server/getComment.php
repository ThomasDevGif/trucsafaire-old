<?php
// get database connection
include_once 'config/database.php';

// Display events
function getComment(){
  $database = new Database();
  $db = $database->getConnection();

  // get posted data
  $data = json_decode(file_get_contents("php://input"));
  $id = $data->id;

  $statement=$db->prepare("SELECT * FROM comment WHERE id=:id");
  $statement->bindParam(':id', $id);
  $statement->execute();
  $results=$statement->fetchAll(PDO::FETCH_ASSOC);
  $json=json_encode($results);
  echo $json;
}

// Execute
getComment();

?>
