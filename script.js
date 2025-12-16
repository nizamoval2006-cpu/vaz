function searchCar() {
    const searchText = document.getElementById('carModel').value.trim();
    const resultsDiv = document.getElementById('results');
    
    if (searchText === '') {
        resultsDiv.innerHTML = '<p>Введите модель для поиска</p>';
        return;
    }
    
    // Показываем индикатор загрузки
    resultsDiv.innerHTML = '<p>Поиск...</p>';
    
    // Используем Fetch API для отправки запроса к PHP
    fetch(`search.php?search=${encodeURIComponent(searchText)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            return response.text();
        })
        .then(data => {
            resultsDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Ошибка:', error);
            resultsDiv.innerHTML = '<p>Произошла ошибка при поиске</p>';
        });
}

document.getElementById('carModel').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchCar();
    }
});