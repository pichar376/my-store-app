import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart } from "../../features/shoppingReducer/shoppingSlice";
import { LiaCartPlusSolid } from "react-icons/lia";
import ButtonAddProduct from "../ButtonAddProduct/ButtonaddProduct";
import { setImageError } from "../../features/shoppingReducer/modalSlice";

const ModalProductDetail = ({ isActiveModal, closeModal }) => {
  const dispatch = useDispatch();

  const imageError = useSelector((state) => {
    return state.modalDetail.imgError;
  });

  const [isActive, setIsActive] = useState(false);

  //item to render from features modalReducer
  const itemToRender = useSelector((state) => {
    return state.modalDetail.productDetail;
  });

  const imageToItem = itemToRender?.images[0];

  const handleAddToCart = (element) => {
    dispatch(addToCart(element));
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 100);
  };

  return (
    <div className="flex-col justify-center items-center h-3/4 w-tablet bg-white fixed z-10 right-0 rounded-lg ">
      <figure>
        <img
          src={imageToItem ? imageToItem : "https://i.imgur.com/OKn1KFI.jpeg"}
          className="w-1/3 h-auto rounded-t-lg"
        />
      </figure>
      <div className="flex items-center justify-between">
        <p className="font-bold p-5">{itemToRender.title}</p>
        <div className="pr-5">
          <ButtonAddProduct
            onAddToCart={handleAddToCart}
            item={itemToRender}
            isActive={isActive}
          />
        </div>
      </div>
      <div className="flex items-center gap-3 p-5">
        <p className="font-bold">Price</p>
        <p className="text-red-500 text-xs">
          $MXN{itemToRender?.price}.<span className="text-xs">00</span>
        </p>
      </div>

      <div className="flex gap-3 p-5 items-baseline h-card-sm overflow-y-auto bg-scroll">
        <p className="font-bold">Description</p>
        <p>{itemToRender.description}</p>
      </div>

      <button
        onClick={closeModal}
        className="absolute top-3 right-3 font-bold text-slate-300"
      >
        X
      </button>
    </div>
  );
};

export default ModalProductDetail;
