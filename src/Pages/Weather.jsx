import Search from "../Components/Search";
import { useState, useEffect } from "react";
import WeatherCard from "../Components/WeatherCard";

const api_key = import.meta.env.VITE_API_KEY;
const hf_key = import.meta.env.VITE_hf;

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");
  const fetchWeatherData = async (param = "Delhi") => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${api_key}&units=metric`
      );
      const data = await response.json();

      if (data) {
        setLoading(false);
        setWeatherData(data);
        // console.log(weatherData);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWeatherData();
  }, []);
  weatherData && console.log(weatherData);

  const handleSearch = () => {
    fetchWeatherData(search);
  };

  const query = async (data) => {
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        {
          headers: {
            Authorization: `Bearer ${hf_key}`,
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.blob();
      return URL.createObjectURL(result);
    } catch (error) {
      console.error("Error querying image:", error);
      return "";
    }
  };
  const handleQueryImage = async (prompt) => {
    try {
      const imageUrl = await query({ inputs: prompt });
      setBackgroundImage(imageUrl);
    } catch (error) {
      console.error("Error setting background image:", error);
    }
  };
  useEffect(() => {
    if (weatherData) {
      handleQueryImage(weatherData.weather[0].main + " weather sky in a city");
    }
  }, [weatherData]);
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})`, width: "100%" }}
      className="min-h-screen w-full  bg-cover"
    >
      <div className="text-white">
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </div>
      {!loading ? (
        <div>{weatherData && <WeatherCard weatherData={weatherData} />}</div>
      ) : (
        <div className="text-white">loading...</div>
      )}
    </div>
  );
};

export default Weather;
