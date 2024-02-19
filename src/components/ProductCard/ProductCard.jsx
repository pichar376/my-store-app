import { useDispatch, useSelector } from "react-redux";
import { LiaCartPlusSolid } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";
import {
  addToCart,
  removeOneToCart,
  removeToCart,
} from "../../features/shoppingReducer/shoppingSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import ButtonRemove from "../ButtonRemove/ButtonRemove";
import ButtonRemoveOrAdd from "../ButtonRemove/ButtonRemove";
import { setModalDetail } from "../../features/shoppingReducer/modalSlice";
import { motion } from "framer-motion";

const ProductCard = ({ item, onOpenModal }) => {
  // counter of products in cart
  const counterProducts = useSelector((state) => {
    return state.shoppingData.value;
  });
  //image status to render some image in case the image is not available
  const [imageError, setImageError] = useState(false);

  //state of modalDetail
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const location = useLocation();

  const handleAddToCart = (element) => {
    dispatch(addToCart(element));
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 100);
  };
  const handleRemoveOne = (element) => {
    dispatch(removeOneToCart(element));
  };
  const handleDeleteToCart = (element) => {
    dispatch(removeToCart(element));
  };

  //data recovered from store
  const modalData = useSelector((state) => {
    return state.modalDetail.productDetail;
  });

  //function to update data of state the modal reducer and actived modal state
  const setModalData = (element) => {
    dispatch(setModalDetail(element));
    onOpenModal();
  };

  const refElement = useRef(null);

  //image error handler
  const handleImageError = () => {
    setImageError(true);
    dispatch(setImageError(true));
  };

  //function for know if is in the page shopping-cart
  const isLocationShoppingCart = () => {
    if (location.pathname === "/shopping-cart") {
      return true;
    } else {
      return false;
    }
  };

  //render if location is ShoppingCart
  const renderButtonDelete = (currentPage) => {
    if (currentPage) {
      return (
        <div className="flex justify-evenly items-center ">
          <div className="flex flex-col">
            <p>total</p>
            <p className="text-red-500 text-xs">
              $MXN{item.price * item.quantity}.
              <span className="text-xs">00</span>
            </p>
          </div>
          <div className="rounded-full p-1 bg-slate-100 ">
            <MdDeleteOutline
              style={{ width: "1.3rem", height: "1.3rem" }}
              onClick={() => {
                handleDeleteToCart(item);
              }}
            />
          </div>
          <div className="flex gap-3 mt-3 h-24 items-center mb-3">
            <ButtonRemoveOrAdd
              onAddOrRemove={handleRemoveOne}
              item={item}
              operator={"-"}
            />

            <p>{item.quantity}</p>

            <ButtonRemoveOrAdd
              item={item}
              onAddOrRemove={handleAddToCart}
              operator={"+"}
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="overflow-x-hidden w-card h-auto z-0 sm:w-h-tablet ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img
          src={
            imageError ? "https://i.imgur.com/OKn1KFI.jpeg" : item?.images[0]
          }
          onClick={() => {
            setModalData(item);
          }}
          className="w-full h-card object-fill"
          ref={refElement}
          onError={handleImageError}
        />
        <p>{item.title}</p>

        <div className="flex justify-between mt-4">
          <p className="text-red-500">
            $MXN{item.price}.<span className="text-xs">00</span>
          </p>
          {!isLocationShoppingCart() && (
            <div
              className={`rounded-full p-1 bg-slate-100 ${
                isActive
                  ? " scale-125 transition duration-200"
                  : " bg-slate-100"
              }`}
            >
              <LiaCartPlusSolid
                style={{ width: "1.3rem", height: "1.3rem" }}
                onClick={() => {
                  handleAddToCart(item);
                }}
              />
            </div>
          )}
        </div>
        {renderButtonDelete(isLocationShoppingCart())}
      </motion.div>
    </div>
  );
};

export default ProductCard;
