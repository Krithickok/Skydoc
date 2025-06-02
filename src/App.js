import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const onSearch = (data) => {
    const coords = data.value.split(" ");
    const lat = coords[0];
    const lon = coords[1];

    const fetchWeather = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const fetchForecast = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([fetchWeather, fetchForecast])
      .then(async ([weatherRes, forecastRes]) => {
        const weatherJson = await weatherRes.json();
        const forecastJson = await forecastRes.json();
        setWeather({ city: data.label, ...weatherJson });
        setForecastData({ city: data.label, ...forecastJson });
      })
      .catch(console.log);
  };

  return (
    <div className="container">
      <Search onSearchChange={onSearch} />
      {weather ? <CurrentWeather data={weather} /> : null}
      {forecastData ? <Forecast data={forecastData} /> : null}
    </div>
  );
}

export default App;