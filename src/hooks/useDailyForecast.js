import { useQuery } from "@tanstack/react-query";
import { DailyForecast } from "../services/DailyForecast";

export const useDailyForecast = (lat, lon) => {
  return useQuery({
    queryKey: ["openMeteo", lat, lon],
    queryFn: () => DailyForecast({ lat, lon }),
    enabled: !!lat && !!lon,
    staleTime: 1000 * 60 * 60,
  });
};
