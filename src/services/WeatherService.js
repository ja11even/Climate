import axios from "axios";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export const fetchWeather = async ({ lat, lon, unit }) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        lat,
        lon,
        units: unit,
        appid: API_KEY,
      },
    }
  );
  return response.data;
};
