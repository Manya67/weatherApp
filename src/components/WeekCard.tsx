export interface weekCardDetails {
  temp: string;
  date: string;
  icon: string;
}
const WeekCard = ({ temp, date, icon }: weekCardDetails) => {
  const getMonth = (ind: string) => {
    switch (ind) {
      case "01":
        return "Jan";
      case "02":
        return "Feb";
      case "03":
        return "Mar";
      case "04":
        return "Apr";
      case "05":
        return "May";
      case "06":
        return "Jun";
      case "07":
        return "Jul";
      case "08":
        return "Aug";
      case "09":
        return "Sept";
      case "10":
        return "Oct";
      case "11":
        return "Nov";
      case "12":
        return "Dec";
      case "12":
        return "Jan";
    }
  };
  const month = getMonth(date.substr(5, 2));
  const day = date.substr(8, 2);

  return (
    <div className="h-40 w-52 rounded-3xl py-2 px-2 bg-white flex justify-center items-center gap-2">
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
