<?php
// get database connection
include_once '../config/database.php';
$database = new Database();
$db = $database->getConnection();

// get posted data
$data = json_decode(file_get_contents("php://input"));
$listId = $data->listId;

$sql = "SELECT * FROM item WHERE listId = :listId";
$stmt = $db->prepare($sql);
$stmt->bindParam(':listId', $listId);

if($stmt->execute()){
  http_response_code(200);
} else {
  http_response_code(404);
}

?>
