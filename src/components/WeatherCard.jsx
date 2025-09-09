export default function WeatherCard({ weather }) {
  // Weather code to icon (simple mapping)
  let icon = "☀️";
  if (weather.weathercode < 3) icon = "☀️";
  else if (weather.weathercode < 60) icon = "☁️";
  else if (weather.weathercode < 70) icon = "🌧️";
  else if (weather.weathercode < 80) icon = "❄️";
  else icon = "🌩️";

  // If city is just a temp (for placeholder), don't show city/country
  const isPlaceholder = typeof weather.city === 'string' && weather.city.endsWith('°C');

  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl px-8 py-10 w-64 mx-auto flex flex-col items-center transition-all duration-300 select-none">
      <div className="text-6xl mb-2 drop-shadow-xl">{icon}</div>
      <div className="text-5xl font-extrabold text-white mb-2 tracking-tight drop-shadow-lg">{weather.temperature}<span className="text-3xl align-top">°C</span></div>
      {!isPlaceholder && (
        <div className="text-lg text-white/80 mb-1 text-center font-medium drop-shadow-sm">{weather.city}</div>
      )}
      <div className="flex justify-center gap-2 text-white/60 text-sm">
        <span className="flex items-center gap-1"><svg className="w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 0 0-2.828 0l-4.243 4.243M15 19h6m-3-3v6"/></svg> {weather.windspeed} km/h</span>
      </div>
      {!isPlaceholder && (
        <p className="text-white/40 text-xs mt-4">
          Last update: {new Date(weather.time).toLocaleTimeString()}
        </p>
      )}
    </div>
  );
}
