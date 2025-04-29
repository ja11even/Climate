import axios from "axios";

export const DailyForecast = async ({ lat, lon }) => {
  console.log(lat, lon);
  const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
    params: {
      latitude: lat,
      longitude: lon,
      daily: "temperature_2m_max,temperature_2m_min,sunrise,sunset,weathercode",
      hourly: "temperature_2m,weathercode",
      timezone: "auto",
    },
  });
  console.log(response.data);
  return response.data;
};
