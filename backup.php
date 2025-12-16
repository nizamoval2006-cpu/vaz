<?php
require_once 'config.php';

// Простая функция для экспорта данных в JSON
$sql = "SELECT * FROM cars";
$stmt = $pdo->query($sql);
$cars = $stmt->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
header('Content-Disposition: attachment; filename="cars_backup.json"');
echo json_encode($cars, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
?>