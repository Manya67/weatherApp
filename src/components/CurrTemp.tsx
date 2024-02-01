const CurrTemp = () => {
  return (
    <div className="h-[90%] w-1/3 py-4 px-2 flex flex-col overflow-x-hidden justify-between items-center">
      <h1 className="text-4xl font-semibold">London,US</h1>
      <p className="text-lg leading-none tracking-wide">fog</p>
      <img width="300px" height="300px" src={`/01d.svg`} alt="weatherIcon" />
      <h1 className="text-5xl font-semibold">17 ^C</h1>
      <p className="text-lg leading-none tracking-wide">feels like 17C</p>
    </div>
  );
};

export default CurrTemp;
