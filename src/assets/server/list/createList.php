<?php
// get database connection
include_once '../config/database.php';

// Display lists
function createList() {
  $database = new Database();
  $db = $database->getConnection();

  // Get posted data
  $data = json_decode(file_get_contents("php://input"));
  $name = $data->name;
  $type = $data->type;

  $stmt = $db->prepare("INSERT INTO list (name, type) VALUES (:name, :type);");
  $stmt->bindParam(':name', $name);
  $stmt->bindParam(':type', $type);
  $stmt->execute();
}

// Execute
createList();
?>
