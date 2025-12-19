<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Поиск информации о машинах</title>
</head>
<body>
    <header>
        <h1>База автомобилей ВАЗ</h1>
        <p style="text-align: center; color: #fff;">Здесь можно найти информацию о ВАЗ 2101 - ВАЗ 2110</p>
    </header>
    
    <div class="input">
        <input type="text" id="carModel" placeholder="Введите модель машины">
        <button onclick="searchCar()">Найти</button>
        <button class="about-btn" onclick="showDeveloper()">О разработчике</button>
    </div>
    
    <div id="results"></div>

    <script src="script.js"></script>
</body>
</html>