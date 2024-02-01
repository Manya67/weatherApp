export const ctoF = (c: number) => (c * 9) / 5 + 32;

export const mpsToMph = (mps: number) => (mps * 2.236936).toFixed(2);

export const kmToMiles = (km: number) => (km / 1.609).toFixed(1);

export const timeTo12HourFormat = (time: any) => {
  let [hours, minutes] = time.split(":");
  return `${(hours %= 12) ? hours : 12}:${minutes}`;
};

export const degToCompass = (num: number) => {
  var val = Math.round(num / 22.5);
  var arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
};
