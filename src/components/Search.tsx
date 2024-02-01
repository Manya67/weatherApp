const Search = () => {
  return (
    <div className="h-[10%] w-full flex justify-between items-center px-2">
      <input
        type="search"
        className="py-2 px-2 rounded-3xl outline-none"
        placeholder="Search city.."
      />
      <div className="w-[25%] flex h-full justify-end items-center px-2">
        <label className="flex cursor-pointer select-none w-16 h-full items-center">
          <div className="relative">
            <input
              type="checkbox"
              className="peer absolute left-1/2 -translate-x-1/2 w-full h-full appearance-none rounded-md"
            />
            <span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-red-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-blue-900 after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 after:content-center"></span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Search;
