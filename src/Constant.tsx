export const OPENWEATHER_API_KEY = "ffbd3a7e32649e0277380722f186d76e";

export const getMonth = (ind: string) => {
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
  }
};
