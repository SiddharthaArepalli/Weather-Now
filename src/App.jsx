import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import React from 'react';

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("today");

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      // Step 1: Get lat/lon from city
      const geo = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );

      if (!geo.data.results || geo.data.results.length === 0) {
        setError("City not found!");
        return;
      }

      const { latitude, longitude, name, country } = geo.data.results[0];

      // Step 2: Get weather
      const res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );

      setWeather({
        city: `${name}, ${country}`,
        ...res.data.current_weather,
      });
    } catch (err) {
      setError("Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="main-wrapper">
        <div className="weather-card">
          <div className="left-panel">
            {/* Title */}
            <div className="app-title">
              <h1>WeatherNow</h1>
            </div>
            
            {/* Search Bar */}
            <div className="search-section">
              <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
            </div>
            
            {loading && <p className="loading-text">Loading...</p>}
            {error && <p className="error-text">{error}</p>}
            
            {weather ? (
              <>
                {/* Weather Icon and Temperature */}
                <div className="weather-display">
                  <div className="weather-icon">
                    {weather.weathercode < 3 ? "☀️" : weather.weathercode < 60 ? "🌤️" : "🌧️"}
                  </div>
                  <div className="temperature">
                    {weather.temperature}°C
                  </div>
                  <div className="weather-description">
                    {weather.weathercode < 3 ? "Mostly Cloudy" : weather.weathercode < 60 ? "Partly Cloudy" : "Rainy"}
                  </div>
                </div>
                
                {/* Date and Location */}
                <div className="location-info">
                  <div className="date-time">
                    {new Date().toLocaleDateString('en-US', { 
                      day: '2-digit', 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="date-time">
                    {new Date().toLocaleDateString('en-US', { 
                      weekday: 'long' 
                    })}, {new Date().toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit',
                      hour12: true 
                    })}
                  </div>
                  <div className="city-name">
                    {weather.city.split(',')[0]}
                  </div>
                </div>
              </>
            ) : (
              <div className="placeholder-state">
                <div className="placeholder-icon">🌤️</div>
                <div className="placeholder-text">Search for a city</div>
              </div>
            )}
          </div>

          {/* Right Panel - Weather Details */}
          <div className="right-panel">
            {/* Tabs */}
            <div className="tabs">
              <button 
                className={`tab ${activeTab === "today" ? "active" : ""}`}
                onClick={() => setActiveTab("today")}
              >
                Today
              </button>
              <button 
                className={`tab ${activeTab === "tomorrow" ? "active" : ""}`}
                onClick={() => setActiveTab("tomorrow")}
              >
                Tomorrow
              </button>
            </div>
            
            {weather && activeTab === "today" && (
              <div className="weather-grid">
                {/* Wind */}
                <div className="weather-metric">
                  <div className="metric-label">Wind</div>
                  <div className="metric-value">{weather.windspeed} km/h</div>
                  <div className="metric-extra">East</div>
                </div>
                
                {/* Humidity */}
                <div className="weather-metric">
                  <div className="metric-label">Humidity</div>
                  <div className="metric-value">69%</div>
                </div>
                
                {/* Real Feel */}
                <div className="weather-metric">
                  <div className="metric-label">Real Feel</div>
                  <div className="metric-value">{weather.temperature + 3}°C</div>
                </div>
                
                {/* UV Index */}
                <div className="weather-metric">
                  <div className="metric-label">UV Index</div>
                  <div className="metric-value">3</div>
                  <div className="metric-extra">Moderate</div>
                </div>
                
                {/* Pressure */}
                <div className="weather-metric">
                  <div className="metric-label">Pressure</div>
                  <div className="metric-value">1000 mb</div>
                </div>
                
                {/* Chance of Rain */}
                <div className="weather-metric">
                  <div className="metric-label">Chance of rain</div>
                  <div className="metric-value">70%</div>
                </div>
                
                {/* Temperature History */}
                <div className="weather-metric">
                  <div className="metric-label">Temperature History</div>
                  <div className="temperature-history">
                    <div className="temp-item">
                      <span className="temp-high">↑</span>
                      <span>{weather.temperature + 2}°C</span>
                    </div>
                    <div className="temp-item">
                      <span className="temp-low">↓</span>
                      <span>{weather.temperature - 5}°C</span>
                    </div>
                  </div>
                </div>
                
                {/* Sun */}
                <div className="weather-metric">
                  <div className="metric-label">Sun</div>
                  <div className="metric-extra">Rise: 5:17 am</div>
                  <div className="metric-extra">Set: 5:17 pm</div>
                </div>
                
                {/* Moon */}
                <div className="weather-metric">
                  <div className="metric-label">Moon</div>
                  <div className="metric-extra">Rise: 5:17 am</div>
                  <div className="metric-extra">Set: 5:17 pm</div>
                </div>
              </div>
            )}
            
            {weather && activeTab === "tomorrow" && (
              <div className="weather-grid">
                {/* Tomorrow's forecast - simulated data */}
                <div className="weather-metric">
                  <div className="metric-label">Wind</div>
                  <div className="metric-value">{weather.windspeed + 5} km/h</div>
                  <div className="metric-extra">Northwest</div>
                </div>
                
                <div className="weather-metric">
                  <div className="metric-label">Humidity</div>
                  <div className="metric-value">72%</div>
                </div>
                
                <div className="weather-metric">
                  <div className="metric-label">Expected High</div>
                  <div className="metric-value">{weather.temperature + 4}°C</div>
                </div>
                
                <div className="weather-metric">
                  <div className="metric-label">Expected Low</div>
                  <div className="metric-value">{weather.temperature - 3}°C</div>
                </div>
                
                <div className="weather-metric">
                  <div className="metric-label">Pressure</div>
                  <div className="metric-value">1005 mb</div>
                </div>
                
                <div className="weather-metric">
                  <div className="metric-label">Chance of rain</div>
                  <div className="metric-value">45%</div>
                </div>
                
                <div className="weather-metric">
                  <div className="metric-label">Forecast</div>
                  <div className="metric-value">Partly Cloudy</div>
                  <div className="metric-extra">Morning showers possible</div>
                </div>
                
                <div className="weather-metric">
                  <div className="metric-label">Sunrise</div>
                  <div className="metric-extra">5:18 am</div>
                  <div className="metric-extra">Sunset: 5:16 pm</div>
                </div>
                
                <div className="weather-metric">
                  <div className="metric-label">Air Quality</div>
                  <div className="metric-value">Good</div>
                  <div className="metric-extra">AQI: 45</div>
                </div>
              </div>
            )}
            
            {!weather && (
              <div className="no-weather">
                <div className="no-weather-text">Weather details will appear here</div>
              </div>
            )}
            
            {/* Footer */}
            <div className="footer">
              Data based on open-meteo.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
