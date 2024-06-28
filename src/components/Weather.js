import React, { useEffect, useState } from 'react';
import { FaCloud, FaSun, FaMoon, FaCloudSun, FaCloudRain } from 'react-icons/fa';
import axios from 'axios';
import './Weather.css'; // Custom CSS file for additional styles

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Istanbul');
  const [image, setImage] = useState('');
  const [cities] = useState([
    { name: 'Istanbul', lat: 41.0082, lon: 28.9784 },
    { name: 'Ankara', lat: 39.9334, lon: 32.8597 },
    { name: 'Izmir', lat: 38.4237, lon: 27.1428 },
    { name: 'New York', lat: 40.7128, lon: -74.0060 },
    { name: 'London', lat: 51.5074, lon: -0.1278 },
    { name: 'Paris', lat: 48.8566, lon: 2.3522 },
    { name: 'Tokyo', lat: 35.6895, lon: 139.6917 },
    { name: 'Sydney', lat: -33.8688, lon: 151.2093 },
    // Daha fazla şehir eklenebilir
  ]);

  const UNSPLASH_ACCESS_KEY = 'zHJwhRbyVEhD0ld_rq1D02g5tWHLXNPBJ6th7b10Dzo'; // Unsplash API Access Key

  useEffect(() => {
    const fetchWeather = async () => {
      const selectedCity = cities.find(c => c.name === city);
      try {
        const weatherResponse = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.lat}&longitude=${selectedCity.lon}&current_weather=true&temperature_unit=celsius`
        );
        setWeather(weatherResponse.data.current_weather);
        setLoading(false);
      } catch (error) {
        setError('Weather data could not be fetched');
        setLoading(false);
      }
    };

    const fetchImage = async () => {
      try {
        const imageResponse = await axios.get(
          `https://api.unsplash.com/search/photos?query=${city}&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        setImage(imageResponse.data.results[0]?.urls?.regular || '');
      } catch (error) {
        setError('Image data could not be fetched');
      }
    };

    fetchWeather();
    fetchImage();
  }, [city, cities]);

  const getClothingAdvice = (temp) => {
    if (temp > 25) {
      return "It's hot outside! Wear light and breathable clothes.";
    } else if (temp > 15) {
      return 'The weather is mild. A light jacket should be fine.';
    } else if (temp > 5) {
      return "It's a bit chilly. Wear a warm coat.";
    } else {
      return "It's very cold! Make sure to bundle up.";
    }
  };

  const getWeatherIcon = (code) => {
    switch (code) {
      case 0: // Clear sky
        return <FaSun className="text-yellow-500 text-6xl mx-auto" />;
      case 1: // Mainly clear
      case 2: // Partly cloudy
        return <FaCloudSun className="text-yellow-500 text-6xl mx-auto" />;
      case 3: // Overcast
        return <FaCloud className="text-gray-500 text-6xl mx-auto" />;
      case 45: // Fog
      case 48: // Depositing rime fog
        return <FaCloud className="text-gray-300 text-6xl mx-auto" />;
      case 51: // Light drizzle
      case 53: // Moderate drizzle
      case 55: // Dense drizzle
      case 61: // Slight rain
      case 63: // Moderate rain
      case 65: // Heavy rain
        return <FaCloudRain className="text-blue-500 text-6xl mx-auto" />;
      default:
        return <FaMoon className="text-gray-800 text-6xl mx-auto" />;
    }
  };

  if (loading) {
    return <div className="text-center py-4">Loading weather data...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  const temperature = weather.temperature;
  const description = weather.weathercode;
  const advice = temperature ? getClothingAdvice(temperature) : null;

  return (
    <section id="weather" className="py-20" style={{ backgroundImage: 'linear-gradient(120deg, #0084f0a1, #d9e2ec, #548cc4)' }}>
      <div className="container mx-auto text-center pb-10">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">Current Weather</h2>
        <div className="mb-4">
          <label htmlFor="city" className="block text-lg font-bold mb-2">
            Select a city:
          </label>
          <select
            id="city"
            className="p-2 rounded border border-gray-400"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            {cities.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md relative inline-block">
          <h3 className="text-2xl font-bold mb-4">{city}</h3>
          <div className="weather-icon">
            {getWeatherIcon(description)}
          </div>
          <p className="text-xl mb-2">Temperature: {temperature}°C</p>
          <p className="text-lg mb-4">Condition: {description}</p>
          <p className="text-md font-semibold">{advice}</p>
          {image && <img src={image} alt={city} className="mt-4 rounded-lg w-80 h-52 object-cover mx-auto shadow-lg" />}
          <div className={`weather-effect ${description >= 61 && description <= 65 ? 'rain' : ''}`}>
            {/* Yağmur efekti */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
