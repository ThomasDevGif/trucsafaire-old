<?php
// get database connection
include_once 'config/database.php';

// Delete event
function deleteComment(){
  $database = new Database();
  $db = $database->getConnection();

  // get posted data
  $data = json_decode(file_get_contents("php://input"));
  $id = $data->id;

  $stmt=$db->prepare("DELETE FROM comment WHERE id=:id");
  $stmt->bindParam(':id', $id);
  $stmt->execute();
}

// Execute
deleteComment();

?>
