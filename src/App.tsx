import { useEffect, useState } from "react";
import CurrDetails from "./components/CurrDetails";
import CurrTemp from "./components/CurrTemp";
import { OPENWEATHER_API_KEY } from "./Constant";

const App = () => {
  const [cityName, setCityName] = useState("Pune");
  const [weatherData, setWeatherData]: any = useState();
  const [apiFetch, setApiFetch] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${OPENWEATHER_API_KEY}`;
      const result = await fetch(URL);
      const data = await result.json();
      setWeatherData({ ...data });
      console.log(data);
      setCityName("");
    };
    getData();
  }, [apiFetch]);

  return (
    <div className="bg-[#F8D8F7] h-screen flex justify-center items-center gap-4">
      {weatherData && !weatherData.message ? (
        <div className="max-h-[80%] max-w-[1100px] bg-white shadow-2xl shadow-[#e3a1e1] rounded-3xl flex items-center justify-center overflow-hidden">
          <CurrTemp
            city={weatherData.name}
            country={weatherData.sys.country}
            temperature={weatherData.main.temp}
            feels={weatherData.main.feels_like}
            desc={weatherData.weather[0].main}
            icon={weatherData.weather[0].icon}
          />
          <div className="h-full w-2/3 py-4 px-2 bg-[#EAEAEB] flex flex-col justify-between items-center">
            <div className="h-[10%] w-full flex justify-between items-center px-2">
              <input
                type="search"
                className="py-2 px-2 rounded-3xl outline-none"
                placeholder="Search city.."
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                onKeyDown={() => {
                  // e.keyCode === 13 &&
                  // setApiFetch(!apiFetch);
                }}
              />
              <div className="w-[25%] flex h-full justify-end items-center px-2">
                <label className="flex cursor-pointer select-none w-16 h-full items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="peer absolute left-1/2 -translate-x-1/2 w-full h-full appearance-none rounded-md"
                    />
                    <span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-red-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-blue-900 after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 after:content-center"></span>
                  </div>
                </label>
              </div>
            </div>
            <CurrDetails weather={weatherData} />
          </div>
        </div>
      ) : weatherData && weatherData.message ? (
        <div className="max-h-[80%] max-w-[1100px] bg-white shadow-2xl shadow-[#e3a1e1] rounded-3xl flex items-center justify-center overflow-hidden">
          <div className="h-full w-2/3 py-4 px-2 bg-[#EAEAEB] flex flex-col justify-between items-center">
            <div className="h-[10%] w-full flex justify-between items-center px-2">
              <input
                type="search"
                className="py-2 px-2 rounded-3xl outline-none"
                placeholder="Search city.."
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                onKeyDown={(e) => {
                  e.keyCode === 13 && setApiFetch(!apiFetch);
                  // e.target.placeholder = ""
                }}
              />
              <div className="w-[25%] flex h-full justify-end items-center px-2">
                <label className="flex cursor-pointer select-none w-16 h-full items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="peer absolute left-1/2 -translate-x-1/2 w-full h-full appearance-none rounded-md "
                      disabled
                    />
                    <span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-red-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-blue-900 after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 after:content-center"></span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>errrororro</div>
      )}
    </div>
  );
};

export default App;
