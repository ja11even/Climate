import styled from "styled-components";
import { useDailyForecast } from "../hooks/useDailyForecast";
import Spinner from "../ui/Spinner";
import heavyrain from "../../src/assets/heavy-rain.png";
import drizzle from "../../src/assets/drizzle.png";
import fog from "../../src/assets/fog.png";
import clearsky from "../../src/assets/clearsky.png";
import partlycloudy from "../../src/assets/partly-cloudy.png";
import rain from "../../src/assets/rain.png";
import heavydrizzle from "../../src/assets/heavydrizzle.png";
import snoww from "../../src/assets/snow.png";
import rainy from "../../src/assets/rainy.png";
import snowfall from "../../src/assets/snowfall.png";
import snowy from "../../src/assets/snowy.png";
import thunderstorm from "../../src/assets/thunderstorm.png";
const Details = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 1rem;
  width: 80%;
  margin-left: 122px;
  @media (max-width: 768px) {
    margin-left: 10px;
    height: 200px;
    gap: 2rem;
    width: 400px;
  }
`;
const Texts = styled.p`
  font-size: 1.7rem;
  color: black;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
const Today = styled.div`
  background-color: #fdfefe;
  border-radius: 15px;
  padding: 2rem;
  width: 210px;
  margin-left: 100px;
  height: 295px;
  margin-top: 50px;
  @media (max-width: 768px) {
    height: 198px;
    min-width: 150px;
    padding: 1rem;
    margin-left: 128px;
    margin-top: 0px;
  }
`;
const TenDayForecast = styled.div`
  background-color: #fdfefe;
  border-radius: 15px;
  padding: 2rem;
  width: 57.5%;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  flex-shrink: 0;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-right: 160px;
    width: 168px;
    height: 198px;
    padding: 1rem;
    margin-top: 0px;
  }
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin-top: 3px;
  }
`;
const ForecastContainers = styled.div`
  background-color: #d8eafe;
  border-radius: 15px;
  padding: 1rem;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  height: 210px;
  box-sizing: border-box;
  align-items: center;
  @media (max-width: 768px) {
    min-width: 129px;
    height: 155px;
    padding: 0.5rem;
  }
`;
const ForecastContainer = styled.div`
  background-color: #d8eafe;
  border-radius: 15px;
  height: 210px;
  width: 170px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  @media (max-width: 768px) {
    width: 129px;
    height: 155px;
    padding: 0.5rem;
  }
`;
const Forecast = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 1520px;
  @media (max-width: 768px) {
    gap: 1rem;
    width: 970px;
  }
`;
const Txt = styled.p`
  font-size: 2rem;
  color: #449fff;
  margin-left: 8px;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
const Txts = styled.p`
  font-size: 2.5rem;
  color: #449fff;
  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
`;
const Description = styled.p`
  color: #449fff;
  margin-top: 10px;
  font-size: 1.7rem;
  text-align: center;
  display: inline-block;
  width: 100%;
  word-break: break-word;
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-top: 1px;
    text-align: center;
    display: inline-block;
    width: 100%;
    word-break: break-word;
  }
`;
const weatherDescriptions = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Heavy drizzle",
  56: "Freezing drizzle",
  57: "Freezing drizzle heavy",
  61: "Light rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Freezing rain light",
  67: "Freezing rain heavy",
  71: "Light snow fall",
  73: "Moderate snow fall",
  75: "Heavy snow fall",
  77: "Snow grains",
  80: "Showers of rain light",
  81: "Showers of rain heavy",
  82: "Showers of rain very heavy",
  85: "Showers of snow light",
  86: "Showers of snow heavy",
  95: "Thunderstorm light",
  96: "Thunderstorm heavy",
  99: "Thunderstorm very heavy",
};

const weatherImages = {
  "Clear sky": clearsky,
  "Mainly clear": clearsky,
  "Partly cloudy": partlycloudy,
  Overcast: partlycloudy,
  Fog: fog,
  "Depositing rime fog": fog,
  "Light drizzle": drizzle,
  "Moderate drizzle": drizzle,
  "Heavy drizzle": heavydrizzle,
  "Freezing drizzle": heavydrizzle,
  "Freezing drizzle heavy": heavydrizzle,
  "Light rain": rainy,
  "Moderate rain": rainy,
  "Heavy rain": rainy,
  "Freezing rain light": rain,
  "Freezing rain heavy": rainy,
  "Light snow fall": snowfall,
  "Moderate snow fall": snowfall,
  "Heavy snow fall": snowy,
  "Snow grains": snowfall,
  "Showers of rain light": rain,
  "Showers of rain heavy": heavyrain,
  "Showers of rain very heavy": heavyrain,
  "Showers of snow light": snowfall,
  "Showers of snow heavy": snoww,
  "Thunderstorm light": thunderstorm,
  "Thunderstorm heavy": thunderstorm,
  "Thunderstorm very heavy": thunderstorm,
};
const getWeatherDescription = (code) =>
  weatherDescriptions[code] || "Unknown weather condition";

function Main({ lat, lon }) {
  const { data, isLoading, error } = useDailyForecast(lat, lon);
  if (!lat || !lon || isLoading) {
    return <Spinner />;
  }
  if (error) return <p>{error.message}</p>;
  const unit = data.daily_units.temperature_2m_max;
  const todayDate = data.daily.time[0];
  const formattedDate = new Date(todayDate).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  //getting the current hour temperature and weather description.
  const now = new Date();

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
  const hourlyTemp = data.hourly.temperature_2m[closestIndex];
  const hourlyDescription = data.hourly.weathercode[closestIndex];
  const hourlyWeatherDescription = getWeatherDescription(hourlyDescription);
  const weatherImg = weatherImages[hourlyWeatherDescription];
  console.log(hourlyWeatherDescription);
  return (
    <div>
      <Details>
        <Today>
          <Txt>TODAY</Txt>
          <ForecastContainer>
            <Texts>{formattedDate}</Texts>
            <Img src={weatherImg} alt="clouds" />
            <Txts>
              {Math.round(hourlyTemp)}
              {unit}
            </Txts>
            <Description>{hourlyWeatherDescription}.</Description>
          </ForecastContainer>
        </Today>
        <TenDayForecast>
          <Txt>7-DAY FORECAST</Txt>
          <Forecast>
            {data.daily.time.map((date, index) => {
              const weatherCode = data.daily.weathercode[index];
              const weatherDescription = getWeatherDescription(weatherCode);
              const weatherImg = weatherImages[weatherDescription];
              return (
                <ForecastContainers key={date}>
                  <Texts>
                    {new Date(date).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "short",
                      day: "numeric",
                    })}
                  </Texts>
                  <Img src={weatherImg} alt="clouds" />
                  <Txts>
                    {Math.round(data.daily.temperature_2m_max[index])}
                    {unit}
                  </Txts>
                  <Description>{weatherDescription}.</Description>
                </ForecastContainers>
              );
            })}
          </Forecast>
        </TenDayForecast>
      </Details>
    </div>
  );
}
export default Main;
