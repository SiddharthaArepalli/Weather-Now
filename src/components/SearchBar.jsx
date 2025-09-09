
import React from 'react';

export default function SearchBar({ city, setCity, fetchWeather }) {
  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <div className="search-icon-left">
          <svg className="search-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
          placeholder="Search for a city..."
          className="search-input"
        />
        <button
          onClick={fetchWeather}
          className="search-button"
          aria-label="Search Weather"
        >
          <svg className="search-button-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
