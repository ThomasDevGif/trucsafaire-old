<?php
// get database connection
include_once '../config/database.php';
$database = new Database();
$db = $database->getConnection();

// instantiate list object
include_once './list.php';
$list = new List($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// set list property values
$list->name = $data->name;
$list->type = $data->type;

// create the list
if ($list->create()) {
    echo "List was created.";
}

// if unable to create the list, tell the list
else {
    echo "Unable to create list.";
}
?>
