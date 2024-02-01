import WeekCard, { weekCardDetails } from "./WeekCard";

const WeekTemp = ({ futureWeather }: any) => {
  return (
    <div className="w-full h-full flex flex-wrap justify-evenly items-start gap-3">
      {futureWeather.map((day: weekCardDetails, index: string) => {
        return (
          <WeekCard
            date={day.date}
            icon={day.icon}
            temp={day.temp}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default WeekTemp;
