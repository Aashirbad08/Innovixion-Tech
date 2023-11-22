document.addEventListener('DOMContentLoaded', () => {
    // give your API key with your OpenWeatherMap API key
    const apiKey = '68babb56bbdf7f67a02f1350e81c57e0';
    const location = 'BRAHMAPUR,IN'; // e.g., 'Brahmapur,IN'

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });

    function displayWeather(data) {
        const weatherInfoDiv = document.getElementById('weather-info');
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        weatherInfoDiv.innerHTML = `
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
            <P>Location: ${location}</p>
        `;
    }
});
