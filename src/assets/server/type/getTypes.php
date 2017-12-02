<?php
// get database connection
include_once '../config/database.php';

// Display types
function getTypes() {
  $database = new Database();
  $db = $database->getConnection();

  $statement=$db->prepare("SELECT * FROM type ORDER BY id");
  $statement->execute();
  $results=$statement->fetchAll(PDO::FETCH_ASSOC);
  $json=json_encode($results);
  echo $json;
}

// Execute
getTypes();

?>
