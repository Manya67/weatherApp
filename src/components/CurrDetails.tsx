import Card from "./Card";

const CurrDetails = ({ weather }: any) => {
  return (
    <div className="w-full flex flex-wrap justify-start items-start py-2 pl-4 gap-2">
      <Card
        mainHeading="Humidity"
        number={weather?.main?.humidity}
        icon="humidity"
      />
      <Card
        mainHeading="Maximum Temp"
        number={weather?.main?.temp_max}
        icon="sunrise"
      />
      <Card
        mainHeading="Minimum Temp"
        number={weather?.main?.temp_min}
        icon="sunset"
      />
      <Card
        mainHeading="Visibility"
        number={weather?.visibility}
        icon="binocular"
      />
      <Card
        mainHeading="Wind speed"
        number={weather?.wind?.speed}
        icon="wind"
      />
      <Card
        mainHeading="Wind direction"
        number={weather?.wind?.deg}
        icon="compass"
      />
    </div>
  );
};

export default CurrDetails;
