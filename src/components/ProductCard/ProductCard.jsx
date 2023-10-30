import image from "../../assets/image-hero-desktop.png";
import { LiaCartPlusSolid } from "react-icons/lia";

const ProductCard = ({ item }) => {
  return (
    <div
      className="overflow-x-hidden w-card rounded"
      style={{ boxShadow: " 3px 3px 5px 0px rgba(0,0,0,0.2)" }}
    >
      <div className="p-3">
        <img src={item.image} className="w-full h-card" />
        <div className="flex justify-between mt-4">
          <p className="text-red-500">
            $MXN{item.price}.<span className="text-xs">00</span>
          </p>
          <div className="rounded-full p-1 bg-slate-100">
            <LiaCartPlusSolid style={{ width: "1.3rem", height: "1.3rem" }} />
          </div>
        </div>
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default ProductCard;
