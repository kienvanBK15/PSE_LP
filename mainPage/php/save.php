<?php

include('_connect_db.php')
include('_fetch_data.php')

$title = isset($_POST['title']) ? $_POST['title'] : die("Require a title");
$content = isset($_POST['content']) ? $_POST['content'] : die("Require a content");

$sql = "INSERT INTO posts(title, content) VALUES('$title','$content')";
$result = mysqli_query($connection, $sql);

if($result) {
    echo "Saved successful";
} else {
    echo "Error:".$mysqli->error;
}

?>