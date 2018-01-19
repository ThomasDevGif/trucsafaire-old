<?php
// get database connection
include_once '../config/database.php';
$database = new Database();
$db = $database->getConnection();

// instantiate item object
include_once './item.php';
$item = new Item($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// set item property values
$item->name = $data->name;
$item->date = $data->date;
$item->done = $data->done;
$item->listId = $data->listId;

// create the item
if($item->create()){
    echo "Item was created.";
}

// if unable to create the item, tell the item
else{
    echo "Unable to create item.";
}
?>
