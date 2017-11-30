<?php
class List {
	private $conn;
	private $table_name= "list";

	public $id;
	public $name;
	public $idType;

	public function __construct($db){
		$this->conn = $db;
	}

	// create list
	public function create(){
		$stmt = $this->conn->prepare("INSERT INTO list (
			name,
			idType
		)
		VALUES (
			:name,
			:idType
		)");

		$stmt->bindParam(":name", $this->name);
		$stmt->bindParam(":idType", $this->idType);

		// Insertion
		if($stmt->execute()){
			return true;
		}else{
			echo "<pre>";
			print_r($stmt->errorInfo());
			echo "</pre>";

			return false;
		}
	}

}
?>
