<?php
// get database connection
include_once 'config/database.php';
$database = new Database();
$db = $database->getConnection();

// instantiate comment object
include_once 'object/comment.php';
$comment = new Comment($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// set comment property values
$comment->name = $data->name;
$comment->date = $data->date;
$comment->message = $data->message;

// create the comment
if($comment->create()){
    echo "Comment was created.";
}

// if unable to create the comment, tell the comment
else{
    echo "Unable to create comment.";
}
?>
