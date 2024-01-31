function App() {
  return (
    <div className="bg-[#F8D8F7] h-screen flex justify-center items-center">
      <div className="h-[90%] w-[80%] bg-white shadow-2xl shadow-[#e3a1e1] rounded-3xl flex items-center justify-center overflow-hidden">
        <div className="h-[90%] w-1/3 py-4 px-2 flex flex-col overflow-x-hidden justify-between items-center">
          <h1 className="text-4xl font-semibold">London,US</h1>
          <p className="text-lg leading-none tracking-wide">fog</p>
          <img
            width="300px"
            height="300px"
            src={`/01d.svg`}
            alt="weatherIcon"
          />
          <h1 className="text-5xl font-semibold">17 ^C</h1>
          <p className="text-lg leading-none tracking-wide">feels like 17C</p>
        </div>
        <div className="h-full w-2/3 py-4 px-2 bg-[#EAEAEB] flex flex-col justify-start items-center">
          <div className="h-[10%] w-full">Search</div>
          <div className="h-[90%] w-full flex justify-start items-start flex-wrap py-2 px-2 gap-x-3">
            <div className="h-44 w-52 rounded-3xl py-2 px-2 bg-white flex justify-center items-center gap-2">
              <img
                width="100px"
                height="100px"
                src={`/01d.svg`}
                alt="weatherIcon"
              />
              <div className="h-full flex flex-col items-end justify-start">
                <h3 className="text-xl font-medium">Visibility</h3>
                <h4 className="text-3xl font-semibold">18</h4>
                <p className="text-lg font-normal">km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
