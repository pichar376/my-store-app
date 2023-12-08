import { useDispatch, useSelector } from "react-redux";
import { LiaCartPlusSolid } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";
import {
  addToCart,
  removeOneToCart,
  removeToCart,
} from "../../features/shoppingReducer/shoppingSlice";
import { useLocation } from "react-router-dom";
import { current } from "@reduxjs/toolkit";
import { useEffect, useRef, useState } from "react";
import ButtonRemove from "../ButtonRemove/ButtonRemove";
import ButtonRemoveOrAdd from "../ButtonRemove/ButtonRemove";
import { setModalDetail } from "../../features/shoppingReducer/modalSlice";

const ProductCard = ({ item, onOpenModal }) => {
  const counterProducts = useSelector((state) => {
    return state.shoppingData.value;
  });
  //image status to render some image in case the image is not available
  const [imageError, setImageError] = useState(false);

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

  const modalData = useSelector((state) => {
    return state.modalDetail.productDetail;
  });
  const setModalData = (element) => {
    dispatch(setModalDetail(element));
    onOpenModal();
  };

  const refElement = useRef(null);

  //image error handler
  const handleImageError = () => {
    setImageError(true);
  };
  //function for know if is in the page shopping-cart
  const isLocationShoppingCart = () => {
    if (location.pathname === "/shopping-cart") {
      return true;
    } else {
      return false;
    }
  };

  const renderButtonDelete = (current) => {
    if (current) {
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
    <div
      className="overflow-x-hidden w-card rounded bg-white z-0 h-36"
      style={{ boxShadow: " 3px 3px 5px 0px rgba(0,0,0,0.2)" }}
    >
      <div className="p-3">
        <img
          src={
            imageError ? "https://i.imgur.com/OKn1KFI.jpeg" : item?.images[0]
          }
          onClick={() => {
            setModalData(item);
          }}
          className="w-full h-card"
          ref={refElement}
          onError={handleImageError}
        />
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
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default ProductCard;
