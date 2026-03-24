<?php








$name = preg_replace('/[^a-zA-Z0-9_-]/', '_', $_GET["name"]);
$timestamp = date('Y-m-d_H-i-s');
$jsonname = $name . "_" . $timestamp . ".json";

file_put_contents("contatos/".$jsonname, json_encode($_GET, JSON_PRETTY_PRINT));

header("Location: contataremosembreve.html");