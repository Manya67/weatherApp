import WeekCard from "./WeekCard";

const WeekTemp = ({ futureWeather }) => {
  return (
    <div className="w-full h-full flex flex-wrap justify-evenly items-start gap-3">
      {futureWeather.map((day, index) => {
        return (
          <WeekCard
            date={day?.date}
            icon={day?.icon}
            temp={day?.temp}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default WeekTemp;
