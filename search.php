<?php
require_once 'config.php';

if (isset($_GET['search'])) {
    $searchText = '%' . $_GET['search'] . '%';
    
    $sql = "SELECT * FROM cars WHERE model LIKE :search";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':search', $searchText, PDO::PARAM_STR);
    $stmt->execute();
    
    $cars = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    if (count($cars) === 0) {
        echo '<p>Автомобиль не найден</p>';
        return;
    }
    
    foreach ($cars as $car) {
        echo '<div class="results">';
        echo '<h3>' . htmlspecialchars($car['model']) . '</h3>';
        echo '<img src="' . htmlspecialchars($car['image']) . '" alt="' . htmlspecialchars($car['model']) . '" width="400">';
        echo '<p><strong>Начало производства:</strong> ' . htmlspecialchars($car['productionStart']) . '</p>';
        echo '<p><strong>Год выпуска:</strong> ' . htmlspecialchars($car['productionYear']) . '</p>';
        echo '<p><strong>Характеристики:</strong> ' . htmlspecialchars($car['specifications']) . '</p>';
        echo '<p><strong>Продано:</strong> ' . htmlspecialchars($car['sales']) . ' шт.</p>';
        echo '</div>';
    }
}
?>