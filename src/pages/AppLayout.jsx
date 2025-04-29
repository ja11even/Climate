import { useEffect, useState } from "react";
import Header from "./Header";
import WeatherCard from "../components/WeatherCard";
import Main from "./Main";
import Footer from "../components/Footer";
function AppLayout() {
  const [coords, setCoords] = useState(null);

  useEffect(function () {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      },
      (err) => console.error(err)
    );
  }, []);

  return (
    <>
      <Header />
      <WeatherCard lat={coords?.lat} lon={coords?.lon} />
      <Main lat={coords?.lat} lon={coords?.lon} />
      <Footer lat={coords?.lat} lon={coords?.lon} />
    </>
  );
}
export default AppLayout;
