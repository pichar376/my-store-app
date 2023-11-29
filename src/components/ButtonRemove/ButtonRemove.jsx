import { useState } from "react";

const ButtonRemoveOrAdd = ({ item, onAddOrRemove, operator }) => {
  const [activeButton, setActiveButton] = useState(false);

  const handleClick = (el) => {
    onAddOrRemove(el);
    setActiveButton(true);

    setTimeout(() => {
      setActiveButton(false);
    }, 200);
  };

  return (
    <div>
      <p
        style={{ width: "1.3rem", height: "1.3rem" }}
        className={`flex items-center justify-center rounded-full p-1 bg-slate-100  cursor-pointer ${
          activeButton ? "scale-125" : ""
        }`}
        onClick={() => {
          handleClick(item);
        }}
      >
        {` ${operator ? operator : "operator"}`}
      </p>
    </div>
  );
};

export default ButtonRemoveOrAdd;
