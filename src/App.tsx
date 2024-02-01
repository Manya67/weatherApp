import CurrDetails from "./components/CurrDetails";
import CurrTemp from "./components/CurrTemp";
import Search from "./components/Search";

function App() {
  return (
    <div className="bg-[#F8D8F7] h-screen flex justify-center items-center gap-4">
      <div className="h-[80%] w-[80%] bg-white shadow-2xl shadow-[#e3a1e1] rounded-3xl flex items-center justify-center overflow-hidden">
        <CurrTemp />
        <div className="h-full w-2/3 py-4 px-2 bg-[#EAEAEB] flex flex-col justify-between items-center">
          <Search />
          <CurrDetails />
          <div className="flex justify-end items-end w-full">
            <button>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
              </svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
