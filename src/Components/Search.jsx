import { IoSearchOutline } from "react-icons/io5";

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[60%] mt-5 flex items-center">
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-8">
          <IoSearchOutline className="text-white font-bold text-[1.7rem]" />
        </div>
        <input
          className="w-full m-2 pl-14 appearance-none outline-none border-[2px] p-2 rounded-lg bg-transparent text-white placeholder:text-white"
          type="text"
          placeholder="Search City"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="absolute right-4 bottom-3 border border-white bg-gray-500 text-white font-bold rounded-lg p-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
