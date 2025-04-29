import styled from "styled-components";
import Spinner from "../ui/Spinner";
import { useDailyForecast } from "../hooks/useDailyForecast";
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
const StyledWeatherCard = styled.div`
  align-items: center;
  justify-content: center;
  padding: 5rem;
  display: flex;
  width: 62%;
  height: 400px;
  margin-left: 300px;
  background-color: #fdfefe;
  border-radius: 15px;
  @media (max-width: 768px) {
    margin-left: 25px;
    margin-bottom: 30px;
    height: 240px;
    width: 338px;
    margin-top: 30px;
  }
`;
const Container = styled.div`
  justify-content: center;
  @media (max-width: 768px) {
    margin-right: 20px;
    margin-top: 0px;
    height: 190px;
    width: 120px;
  }
`;
const ContainerTwo = styled.div`
  gap: 5rem;
  @media (max-width: 768px) {
    margin-right: 50px;
    margin-bottom: 25px;
    width: 200px;
  }
`;
const Texts = styled.p`
  font-size: 4rem;
  margin-left: 57px;
  margin-top: 15px;
  color: #449fff;
  @media (max-width: 768px) {
    margin-left: 5px;
    font-size: 4rem;
    margin-top: 15px;
  }
`;
const Img = styled.img`
  width: 200px;
  height: 200px;
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin-left: 15px;
  }
`;
const Info = styled.div`
  margin-left: 60px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin-left: 5px;
    width: 130px;
    margin-bottom: 195px;
  }
`;
const Text = styled.p`
  font-size: 2.5rem;
  color: black;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 1.6rem;
    width: 180px;
    margin-top: 2px;
  }
`;
const Txt = styled.p`
  font-size: 4rem;
  color: black;
  @media (max-width: 768px) {
    font-size: 2.3rem;
    margin-top: 220px;
    width: 180px;
  }
`;

const Txts = styled.p`
  color: #449fff;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 180px;
    margin-top: 5px;
  }
`;

const DesTxts = styled.p`
  color: #449fff;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 180px;
    margin-top: 2px;
    display: inline-block;
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
function WeatherCard({ lat, lon }) {
  const { data, isLoading, error } = useDailyForecast(lat, lon);
  if (!lat || !lon || isLoading) {
    return <Spinner />;
  }
  if (error) return <p>{error.message}</p>;
  console.log(data);
  const todayDate = data.daily.time[0];
  const formattedDate = new Date(todayDate).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  const maxTemp = data.daily.temperature_2m_max[0];
  const minTemp = data.daily.temperature_2m_min[0];
  const sunRise = new Date(data.daily.sunrise[0]).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunSet = new Date(data.daily.sunset[0]).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const unit = data.daily_units.temperature_2m_max;
  const location = data.timezone;
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
  return (
    <StyledWeatherCard>
      <Container>
        <Img src={weatherImg} alt="Clouds" />
        <Texts>
          {Math.round(hourlyTemp)}
          {unit}
        </Texts>
      </Container>
      <ContainerTwo>
        <Info>
          <Txt>{formattedDate}</Txt>
          <Text>{location}.</Text>
          <DesTxts>Description: {hourlyWeatherDescription}.</DesTxts>
          <Txts>
            H: {Math.round(maxTemp)}
            {unit} L: {Math.round(minTemp)}
            {unit}
          </Txts>
          <Txts>Sunrise: {sunRise}</Txts>
          <Txts>Sunset : {sunSet}</Txts>
        </Info>
      </ContainerTwo>
    </StyledWeatherCard>
  );
}

export default WeatherCard;
