<?php
// Get database connection
include_once 'config/database.php';
$database = new Database();
$db = $database->getConnection();

// Get posted data
$data = json_decode(file_get_contents("php://input"));

// Set comment property values
$id = $data->id;
$name = $data->name;
$date = $data->date;
$message = $data->message;

$sql = "UPDATE comment SET name = :name, message = :message WHERE id = :id";
$stmt = $db->prepare($sql);
$stmt->bindParam(':id', $id);
$stmt->bindParam(':name', $name);
$stmt->bindParam(':message', $message);

if($stmt->execute()){
  http_response_code(200);
} else {
  http_response_code(404);
}
?>
