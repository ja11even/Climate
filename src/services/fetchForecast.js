import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export const fetchForecast = async ({ lat, lon, unit }) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast",
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
