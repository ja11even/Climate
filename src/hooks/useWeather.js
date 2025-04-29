import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../services/WeatherService";

export const useWeather = (lat, lon, unit) => {
  return useQuery({
    queryKey: ["weather", lat, lon, unit],
    queryFn: () => fetchWeather({ lat, lon, unit }),
    enabled: !!lat && !!lon,
    staleTime: 1000 * 60 * 5,
  });
};
