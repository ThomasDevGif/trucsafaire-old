<?php
// get database connection
include_once 'config/database.php';
$database = new Database();
$db = $database->getConnection();

// instantiate event object
include_once 'object/event.php';
$event = new Event($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// set event property values
$event->name = $data->name;
$event->date = $data->date;

// create the event
if($event->create()){
    echo "Event was created.";
}

// if unable to create the event, tell the event
else{
    echo "Unable to create event.";
}
?>
