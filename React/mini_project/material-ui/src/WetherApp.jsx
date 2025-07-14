// Weatherapp.jsx
import { useState } from "react";
import Search from "./search";
import Infobox from "./infobox";

export default function Weatherapp() {
  const [weatherInfo, setWeatherInfo] = useState(null); // holds city data or null
  const [error, setError] = useState(""); // holds error if city not found

  const handleWeatherUpdate = async (city) => {
    const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;
    const APIURL = import.meta.env.VITE_WEATHER_API_URL;

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`);
      const data = await response.json();

      if (data.cod === "404") {
        setWeatherInfo(null);
        setError("City not found ❌");
        return;
      }

      let result = {
        city: city,
        feellike: data.main.feels_like,
        humidity: data.main.humidity,
        temp: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        des: data.weather[0].description,
      };

      setWeatherInfo(result);
      setError(""); // clear any previous error
    } catch (err) {
      setError("Something went wrong 😓");
      setWeatherInfo(null);
    }
  };

  return (
    <div>
      <Search onCitySearch={handleWeatherUpdate} />
      <Infobox weatherData={weatherInfo} error={error} />
    </div>
  );
}
