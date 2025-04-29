import styled from "styled-components";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Spinner from "../ui/Spinner";
import { useDailyForecast } from "../hooks/useDailyForecast";

const WholedayForecast = styled.div`
  padding: 5rem;
  @media (max-width: 768px) {
    padding: 1.3rem;
    margin-top: 40px;
  }
`;
const Container = styled.div`
  justify-content: center;
  margin-left: 250px;
  background-color: white;
  width: 66.7%;
  border-radius: 15px;
  padding: 2rem;
  position: relative;
  @media (max-width: 768px) {
    margin-left: 12px;
    height: 160px;
    padding: 1rem;
    width: 338px;
  }
`;
const Txt = styled.p`
  font-size: 2rem;
  color: #449fff;
  margin-left: 300px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin-left: 80px;
    font-size: 1.5rem;
    width: 165px;
  }
`;
const ChartWrapper = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 15px;
    width: 330px;
  }
`;
const TradeMark = styled.p`
  margin-left: 535px;
  margin-top: 50px;
  @media (max-width: 768px) {
    display: none;
  }
`;
function Footer({ lat, lon }) {
  const { isDarkMode } = useTheme();
  const { data, isLoading, error } = useDailyForecast(lat, lon);
  if (isLoading || !lat || !lon) return <Spinner />;
  const chartData = data.hourly.time.slice(0, 24).map((time, index) => ({
    hour: new Date(time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    temp: data.hourly.temperature_2m[index],
  }));
  const unit = data.daily_units.temperature_2m_max;
  const colors = isDarkMode
    ? {
        text: "#449fff",
      }
    : {
        text: "#449fff",
      };
  if (error) return <p>{error.message}</p>;
  return (
    <WholedayForecast>
      <Container>
        <Txt>🕒 HOURLY FORECAST</Txt>
        {isLoading ? (
          <Spinner />
        ) : (
          <ChartWrapper>
            <ResponsiveContainer width="90%" height={100}>
              <LineChart data={chartData}>
                <XAxis
                  dataKey="hour"
                  tick={{ fill: colors.text }}
                  tickLine={{ stroke: colors.text }}
                />
                <YAxis
                  unit={unit}
                  tick={{ fill: colors.text }}
                  tickLine={{ stroke: colors.text }}
                />
                <Tooltip
                  formatter={(value) => [`${Math.round(value)}${unit}`]}
                  contentStyle={{
                    backgroundColor: "#449fff",
                    color: "white",
                    borderRadius: "5px",
                  }}
                  labelStyle={{ color: "white" }}
                  itemStyle={{ color: "white" }}
                />

                <Line
                  type="monotone"
                  dataKey="temp"
                  stroke="#449fff"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartWrapper>
        )}
      </Container>
      <TradeMark>
        &copy; {new Date().getFullYear()} Climate. All rights reserved.
      </TradeMark>
    </WholedayForecast>
  );
}

export default Footer;
