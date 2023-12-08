import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../features/shoppingReducer/shoppingSlice";
import { LiaCartPlusSolid } from "react-icons/lia";
import ButtonAddProduct from "../ButtonAddProduct/ButtonaddProduct";

const ModalProductDetail = ({ isActiveModal, closeModal }) => {
  const [imageError, setImageError] = useState(false);

  const [isActive, setIsActive] = useState(false);

  const itemToRender = useSelector((state) => {
    return state.modalDetail.productDetail;
  });

  //image error handler
  const handleImageError = () => {
    setImageError(true);
  };

  const dispatch = useDispatch();
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
          src={
            imageError
              ? "https://i.imgur.com/OKn1KFI.jpeg"
              : itemToRender?.images[0]
          }
          className="w-1/3 h-auto rounded-lg"
          onError={handleImageError}
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

      <div className="flex items-center gap-3 p-5 items-baseline">
        <p className="font-bold">Description</p>
        <p>{itemToRender.description}</p>
      </div>

      <button onClick={closeModal} className="absolute top-3 right-3 font-bold">
        X
      </button>
    </div>
  );
};

export default ModalProductDetail;
