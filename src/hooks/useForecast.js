import { useQuery } from "@tanstack/react-query";
import { fetchForecast } from "../services/fetchForecast";

export const useForecast = (lat, lon, unit) => {
  return useQuery({
    queryKey: ["forecast", lat, lon, unit],
    queryFn: () => fetchForecast({ lat, lon, unit }),
    enabled: !!lat && !!lon,
  });
};
