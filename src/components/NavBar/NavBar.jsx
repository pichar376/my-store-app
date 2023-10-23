import SearchProducts from "../SearchProducts/SearchProducts";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="w-80 flex justify-between mt-6 border-2 border-slate-600">
      <div className="h-6 w-8 flex justify-center items-center">
        <AiOutlineMail className="text-xl text-slate-500" />
      </div>
      <SearchProducts />
      <div className="h-6 w-8 flex justify-center items-center">
        <AiOutlineHeart className="text-xl text-slate-500" />
      </div>
    </div>
  );
};

export default NavBar;
