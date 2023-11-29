import SearchProducts from "../SearchProducts/SearchProducts";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-80 flex justify-between mt-6 border-2 border-slate-600">
      <div className="h-6 w-8 flex justify-center items-center">
        <AiOutlineMail className="text-xl text-slate-500" />
      </div>
      <SearchProducts />
      <section className="flex gap-3">
        <div className="h-6 w-8 flex justify-center items-center">
          <AiOutlineHeart className="text-xl text-slate-500" />
        </div>
        <div className="h-6 w-8 flex justify-center items-center">
          <Link to={"shopping-cart"}>
            <BsCart2 className="text-xl text-slate-500" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
