import { getMonth } from "../Constant";
import { weekCardDetails } from "../interface";

const WeekCard = ({ temp, date, icon }: weekCardDetails) => {
  const month = getMonth(date?.substr(5, 2));
  const day = date?.substr(8, 2);

  return (
    <div className="h-40 w-52 rounded-3xl py-2 px-2 bg-white dark:bg-[#0a0a0a] flex justify-center items-center gap-2">
      <div className="flex justify-end items-end h-full">
        <img
          width="100px"
          height="100px"
          src={`/icons/${icon}.svg`}
          alt="weatherIcon"
        />
      </div>

      <div className="h-full flex flex-col items-end justify-start pr-1">
        <h3 className="text-xl font-medium text-right ">
          {day} {month}
        </h3>
        <h4 className="text-2xl font-semibold">{temp}</h4>
        <p className="text-base font-normal">C</p>
      </div>
    </div>
  );
};

export default WeekCard;
