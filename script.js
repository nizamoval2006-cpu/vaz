function searchCar() {
    const searchText = document.getElementById('carModel').value.trim();
    const resultsDiv = document.getElementById('results');
    
    if (searchText === '') {
        resultsDiv.innerHTML = '<p>Введите модель для поиска</p>';
        return;
    }
    
    resultsDiv.innerHTML = '<p>Поиск...</p>';
    
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

// Функция для показа информации о разработчике
function showDeveloper() {
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = `
        <div class="results">
            <h3>Разработчик сайта</h3>
            <img src="images/developerr.jpg" alt="Разработчик" width="300">
            <p><strong>Имя:</strong> Низамова Лиана</p>
            <p><strong>Должность:</strong> Веб-разработчик</p>
            <p><strong>Опыт:</strong> 3 года в веб-разработке</p>
            <p><strong>Описание:</strong> Создатель этой базы данных автомобилей ВАЗ. 
            Увлечен классическими автомобилями и веб-технологиями. 
            Цель проекта - сохранить историю отечественного автопрома.</p>
        </div>
    `;
}

document.getElementById('carModel').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchCar();
    }
});