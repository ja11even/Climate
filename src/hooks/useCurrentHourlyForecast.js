import { useMemo } from "react";
import { getWeatherDescription } from "../utils/getWeatherDescription"; // We'll separate helper functions too.

export function useCurrentHourlyForecast(data) {
  const currentForecast = useMemo(() => {
    const now = new Date();
    if (
      !data?.hourly?.time ||
      !data?.hourly?.temperature_2m ||
      !data?.hourly?.weathercode
    ) {
      return null;
    }

    const hourlyTimes = data.hourly.time.map((t) => new Date(t));

    let closestIndex = 0;
    let smallestDiff = Infinity;

    for (let i = 0; i < hourlyTimes.length; i++) {
      const diff = Math.abs(now - hourlyTimes[i]);
      if (diff < smallestDiff) {
        smallestDiff = diff;
        closestIndex = i;
      }
    }

    return {
      temperature: data.hourly.temperature_2m[closestIndex],
      weatherDescription: getWeatherDescription(
        data.hourly.weathercode[closestIndex]
      ),
    };
  }, [data, now]);

  return currentForecast;
}
