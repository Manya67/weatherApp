interface currTempDeatils {
  city: string;
  country: string;
  temperature: string;
  feels: string;
  desc: string;
  icon: string;
}
const CurrTemp = ({
  city,
  country,
  temperature,
  feels,
  desc,
  icon,
}: currTempDeatils) => {
  return (
    <div className="h-[90%] w-1/3 py-4 px-2 flex flex-col overflow-x-hidden justify-between items-center">
      <h1 className="text-4xl font-semibold">
        {city},{country}
      </h1>
      <p className="text-lg leading-none tracking-wide">{desc}</p>
      <img
        width="300px"
        height="300px"
        src={`/icons/${icon}.svg`}
        alt="weatherIcon"
      />
      <h1 className="text-5xl font-semibold">{temperature}</h1>
      <p className="text-lg leading-none tracking-wide">feels like {feels}</p>
    </div>
  );
};

export default CurrTemp;
