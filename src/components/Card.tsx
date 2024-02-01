const Card = () => {
  return (
    <div className="h-44 w-52 rounded-3xl py-2 px-2 bg-white flex justify-center items-center gap-2">
      {/* <img width="100px" height="100px" src={`/01d.svg`} alt="weatherIcon" />
      <div className="h-full flex flex-col items-end justify-start">
        <h3 className="text-xl font-medium">Visibility</h3>
        <h4 className="text-3xl font-semibold">18</h4>
        <p className="text-lg font-normal">km</p>
      </div> */}
      <img width="100px" height="100px" src={`/01d.svg`} alt="weatherIcon" />
      <div className="h-full flex flex-col items-end justify-start">
        <h3 className="text-xl font-medium">23 Sep</h3>
        <h4 className="text-3xl font-semibold">18</h4>
        <p className="text-lg font-normal">C</p>
      </div>
    </div>
  );
};

export default Card;
