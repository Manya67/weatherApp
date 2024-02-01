import { useEffect, useState } from "react";
import CurrDetails from "./components/CurrDetails";
import CurrTemp from "./components/CurrTemp";
import { OPENWEATHER_API_KEY } from "./Constant";
import WeekTemp from "./components/WeekTemp";

const App = () => {
  const [cityName, setCityName] = useState("Pune");
  const [weatherData, setWeatherData]: any = useState();
  const [futureDetail, setFutureDetail]: any = useState();
  const [apiFetch, setApiFetch] = useState(true);

  useEffect(() => {
    const updateIndices = async (data: any) => {
      let indices = new Array(5);
      const currdate =
        data?.list[0]?.dt_txt.substr(5, 2) + data?.list[0]?.dt_txt.substr(8, 2);
      let ind = 0;
      for (let i = 1; i < 40; i++) {
        const date =
          data?.list[i]?.dt_txt.substr(5, 2) +
          data?.list[i]?.dt_txt.substr(8, 2);
        const timezone = data?.list[i]?.dt_txt.substr(11, 2);
        if (date > currdate && timezone == "12") {
          indices[ind] = i;
          ind++;
        }
      }
      return indices;
    };
    const updateState = async (data: any) => {
      const days = [];
      const indices = await updateIndices(data);

      for (let i = 0; i < 5; i++) {
        days.push({
          date: data.list[indices[i]].dt_txt,
          desc: data.list[indices[i]].weather[0].description,
          icon: data.list[indices[i]].weather[0].icon,
          temp: data.list[indices[i]].main.temp,
        });
      }
      return days;
    };
    const getFutureData = async () => {
      const URL = ` https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&cnt=40&appid=${OPENWEATHER_API_KEY}`;
      const result = await fetch(URL);
      const data = await result.json();
      const updatedState = await updateState(data);
      setFutureDetail(updatedState);
      setCityName("");
    };
    const getData = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${OPENWEATHER_API_KEY}`;
      const result = await fetch(URL);
      const data = await result.json();
      setWeatherData({ ...data });
    };

    if (cityName != "") {
      getData();
      getFutureData();
    }
  }, [apiFetch]);

  return (
    <>
      {weatherData && !weatherData?.message ? (
        <div className="bg-[#F8D8F7] h-100vh flex flex-col justify-evenly items-center gap-2 py-6">
          <div className="h-[70%] max-w-[1100px] bg-white shadow-2xl shadow-[#e3a1e1] rounded-3xl flex items-center justify-center overflow-hidden">
            <CurrTemp
              city={weatherData?.name}
              country={weatherData?.sys?.country}
              temperature={weatherData?.main?.temp}
              feels={weatherData?.main?.feels_like}
              desc={weatherData?.weather[0]?.main}
              icon={weatherData?.weather[0]?.icon}
            />
            <div className="h-full w-2/3 py-4 px-2 bg-[#EAEAEB] flex flex-col justify-between items-center">
              <div className="h-[10%] w-[95%] flex justify-between items-center ">
                <input
                  type="search"
                  className="py-2 px-2 rounded-3xl outline-none"
                  placeholder="Search city.."
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                  onKeyDown={(e) => {
                    e.keyCode === 13 && setApiFetch(!apiFetch);
                  }}
                />
                <div className="w-[25%] flex h-full justify-end items-center px-2">
                  <label className="flex cursor-pointer select-none w-16 h-full items-center">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="peer absolute left-1/2 -translate-x-1/2 w-full h-full appearance-none rounded-md"
                      />
                      <span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-[#F8D8F7] rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 after:content-center"></span>
                    </div>
                  </label>
                </div>
              </div>

              <CurrDetails weather={weatherData} />
            </div>
          </div>
          {futureDetail && (
            <div className="h-[20%] max-w-[1100px] rounded-3xl flex items-center justify-center overflow-hidden">
              <WeekTemp futureWeather={futureDetail} />
            </div>
          )}
        </div>
      ) : weatherData && weatherData?.message ? (
        <div className="bg-[#F8D8F7] h-screen flex flex-col justify-evenly items-center gap-2 py-6">
          <div className="h-[460px] min-w-[1100px] max-w-[1100px] bg-white shadow-2xl shadow-[#e3a1e1] rounded-3xl flex items-center justify-center overflow-hidden">
            <div className="h-full min-w-[300px]" />
            <div className="h-full w-full py-4 px-2 bg-[#EAEAEB] flex flex-col justify-start items-center">
              <div className="h-[10%] w-[95%] flex justify-between items-center ">
                <input
                  type="search"
                  className="py-2 px-2 rounded-3xl outline-none"
                  placeholder="Search city.."
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                  onKeyDown={(e) => {
                    e.keyCode === 13 && setApiFetch(!apiFetch);
                  }}
                />
                <div className="w-[25%] flex h-full justify-end items-center px-2">
                  <label className="flex cursor-pointer select-none w-16 h-full items-center">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="peer absolute left-1/2 -translate-x-1/2 w-full h-full appearance-none rounded-md cursor-not-allowed"
                        disabled
                      />
                      <span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-[#F8D8F7] rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 after:content-center"></span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="max-w-full flex flex-wrap justify-start items-start py-2 pl-4 gap-2">
                <div className="h-48 w-56 rounded-3xl py-2 px-2 bg-white flex justify-center items-center gap-2" />
                <div className="h-48 w-56 rounded-3xl py-2 px-2 bg-white flex justify-center items-center gap-2" />
                <div className="h-48 w-56 rounded-3xl py-2 px-2 bg-white flex justify-center items-center gap-2" />
                <div className="h-48 w-56 rounded-3xl py-2 px-2 bg-white flex justify-center items-center gap-2" />
                <div className="h-48 w-56 rounded-3xl py-2 px-2 bg-white flex justify-center items-center gap-2" />
                <div className="h-48 w-56 rounded-3xl py-2 px-2 bg-white flex justify-center items-center gap-2" />
              </div>
            </div>
          </div>
          <div className="min-h-[20%] min-w-[1100px] rounded-3xl flex items-center justify-center overflow-hidden">
            <div className="w-full h-full flex flex-wrap justify-evenly items-start gap-3">
              <div className="h-40 w-52 rounded-3xl py-2 px-2 bg-white flex justify-center items-center gap-2" />
              <div className="h-40 w-52 rounded-3xl py-2 px-2 bg-white flex justify-center items-center gap-2" />
              <div className="h-40 w-52 rounded-3xl py-2 px-2 bg-white flex justify-center items-center gap-2" />
              <div className="h-40 w-52 rounded-3xl py-2 px-2 bg-white flex justify-center items-center gap-2" />
              <div className="h-40 w-52 rounded-3xl py-2 px-2 bg-white flex justify-center items-center gap-2" />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-full text-center"> ERRROORRR!</div>
      )}
    </>
  );
};

export default App;
