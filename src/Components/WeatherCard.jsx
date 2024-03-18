const WeatherCard = ({ weatherData }) => {
  return (
    <div className="w-full  flex  justify-center items-center  overscroll-none">
      <div className="  w-1/2 p-6 mt-40 border rounded-lg shadow bg-gray-700 bg-opacity-50 hover:bg-gray-800 max-md:w-2/3">
        <div className=" text-gray-900 dark:text-white  font-thin mb-1 text-3xl">
          {weatherData.name},{weatherData.sys.country}
        </div>
        <div className="flex justify-between items-center max-md:flex-col">
          <h5 className="mb-2 relative tracking-tight text-gray-900 dark:text-white  font-thin text-9xl max-md:text-6xl">
            {weatherData && weatherData.main.temp}
            <span className=" absolute text-7xl top-2">&deg;</span>
            <div className="text-lg tracking-wider">
              max temp: {weatherData.main.temp_max}&deg;
            </div>
            <div className="text-lg tracking-wider">
              min temp: {weatherData.main.temp_min}&deg;
            </div>
          </h5>
          <div className="flex flex-col-reverse justify-evenly ">
            <h5 className="text-lg tracking-wider  dark:text-white  font-thin">
              feels like: {weatherData.main.feels_like}&deg;
            </h5>
            <h5 className="   mb-2 text-6xl  tracking-tight text-gray-900 dark:text-white">
              {weatherData && weatherData.weather[0].main}
            </h5>
          </div>
        </div>
        <div className="mb-2  tracking-tight text-gray-900 dark:text-white  font-thin text-5xl flex justify-between max-md:flex-col max-md:text-3xl">
          <div>
            <h5>Humidity: {weatherData.main.humidity}%</h5>
            <h5>
              Pressure: {weatherData.main.pressure}
              <span className="text-2xl pl-2">mbar</span>
            </h5>
          </div>
          <div>Wind:{weatherData.wind.speed} m/s</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
