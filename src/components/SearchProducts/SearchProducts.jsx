import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../features/shoppingReducer/shoppingSlice";

const SearchProducts = () => {
  const searchData = useSelector((state) => state.shoppingData.search);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="sm:w-80 md:w-60 flex bg-slate-300">
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search"
        className="w-full h-6 bg-slate-300 placeholder:text-slate-400 placeholder:p-3 border-none"
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
