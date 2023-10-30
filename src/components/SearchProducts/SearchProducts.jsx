import { BsSearch } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";

const SearchProducts = () => {
  return (
    <div className="sm:w-80 md:w-60 flex bg-slate-300">
      <input
        type="text"
        placeholder="Search"
        className="w-full h-6 bg-slate-300 placeholder:text-slate-400 placeholder:p-3"
      />
      <div className="h-6 flex justify-center items-center p-3">
        <FiCamera className="text-slate-400" />
      </div>
      <div className="w-10 h-6 bg-slate-600 flex justify-center items-center">
        <BsSearch className=" h-3 text-slate-300" />
      </div>
    </div>
  );
};

export default SearchProducts;
