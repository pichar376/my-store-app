import SearchProducts from "../SearchProducts/SearchProducts";
import { AiOutlineMail } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import NotificationProducts from "../NotificationProducts/NotificationProducts";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartData = useSelector((state) => state.shoppingData.cart);

  return (
    <div className="w-80 flex justify-between mt-6 border-2 border-slate-600 gap-3">
      <div className="h-1.5 w-8 flex justify-center items-center">
        <AiOutlineMail className="text-xl text-slate-500" />
      </div>
      <SearchProducts />
      <section className="flex gap-3">
        <div className="h-1.5 w-8 flex justify-center items-center"></div>
        <div className="h-1.5 w-8 flex justify-center items-center">
          <Link to={"shopping-cart"}>
            <BsCart2 className="text-xl text-slate-500" />
          </Link>
          {cartData.length > 0 ? (
            <NotificationProducts counter={cartData} />
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default NavBar;
