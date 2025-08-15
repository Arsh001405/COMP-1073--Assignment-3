const apiKey = "c41ac35a7f3590c6fc141982b39cd296";

document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value.trim();
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }
    getWeather(city);
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("cityName").textContent = data.name;
            document.getElementById("description").textContent = data.weather[0].description;
            document.getElementById("temperature").textContent = data.main.temp;
            document.getElementById("humidity").textContent = data.main.humidity;
            document.getElementById("windSpeed").textContent = data.wind.speed;
            document.getElementById("feelsLike").textContent = data.main.feels_like;

            const iconCode = data.weather[0].icon;
            document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            document.getElementById("weatherResult").classList.remove("hidden");
        })
        .catch(error => {
            alert(error.message);
        });
}
