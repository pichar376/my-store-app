import { LiaCartPlusSolid } from "react-icons/lia";

const ButtonAddProduct = ({ item, onAddToCart, isActive }) => {
  return (
    <div className="flex justify-center">
      <div
        className={`rounded-full p-1 bg-slate-100 ${
          isActive ? " scale-125 transition duration-200" : " bg-slate-100"
        }`}
      >
        <LiaCartPlusSolid
          style={{ width: "1.3rem", height: "1.3rem" }}
          onClick={() => {
            onAddToCart(item);
          }}
        />
      </div>
    </div>
  );
};

export default ButtonAddProduct;
