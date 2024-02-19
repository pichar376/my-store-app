import { useSelector } from "react-redux";
import ProductList from "../ProductList/ProductList";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ShoppingCart = () => {
  const cartData = useSelector((state) => state.shoppingData.cart);

  return (
    <AnimatePresence>
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="fixed top-10 left-10">
            <Link to="/">
              <FaArrowLeft />
            </Link>
          </div>
          {cartData.length != 0 ? (
            <ProductList dataToRender={cartData} />
          ) : (
            <div className="w-full h-80  flex flex-col justify-center items-center gap-8">
              <p>There are no products</p>
              <Link to="/">
                <p className="font-bold">go to add Products</p>
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ShoppingCart;
