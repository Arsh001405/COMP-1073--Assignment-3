const apiKey = "c41ac35a7f3590c6fc141982b39cd296";

document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value.trim();
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }
    getWeather(city);
});
