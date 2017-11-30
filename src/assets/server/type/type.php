<?php
class Type {
	private $conn;
	private $table_name= "type";

	public $id;
	public $name;

	public function __construct($db) {
		$this->conn = $db;
	}

	// create type
	public function create() {
		$stmt = $this->conn->prepare("INSERT INTO type (
			name
		)
		VALUES (
			:name,
			:date,
      :message
		)");

		$stmt->bindParam(":name", $this->name);

		// Insertion
		if ($stmt->execute()) {
			return true;
		} else {
			echo "<pre>";
			print_r($stmt->errorInfo());
			echo "</pre>";

			return false;
		}
	}

}
?>
