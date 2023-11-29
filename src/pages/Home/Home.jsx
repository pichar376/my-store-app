import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useGetData } from "../../hooks/useGetData";
import ProductList from "../ProductList/ProductList";
import { useEffect } from "react";
import { setProducts } from "../../features/shoppingReducer/shoppingSlice";
import { useFilter } from "../../hooks/useFilter";

const url = "https://api.escuelajs.co/api/v1/products";

const Home = () => {
  const { data, loading } = useGetData(url);
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.shoppingData.products);
  const searchData = useSelector((state) => state.shoppingData.search);
  const { filteredItems } = useFilter(productsData, searchData);
  useEffect(() => {
    dispatch(setProducts(data));
  }, [data]);
  return (
    <div className="w-full grow h-full mt3 border-2  border-slate-800 flex flex-col justfy-center items-center flex-nowrap">
      <NavBar />

      <ProductList dataToRender={filteredItems} loading={loading} />
      <Footer />
    </div>
  );
};

export default Home;
