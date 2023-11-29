import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useGetData } from "../../hooks/useGetData";
import { setProducts } from "../../features/shoppingReducer/shoppingSlice";
import { useEffect, useMemo } from "react";
import { MdRestaurantMenu } from "react-icons/md";
import Loading from "../../components/Loader/Loader";

const ProductList = ({ dataToRender, loading }) => {
  const searchData = useSelector((state) => state.shoppingData.search);

  const renderList = () => {
    if (dataToRender > 0) {
      return dataToRender?.map((el, id) => <ProductCard key={id} item={el} />);
    }
  };

  const memoRenderList = useMemo(() => {
    if (dataToRender?.length > 0) {
      return dataToRender?.map((el, id) => <ProductCard key={id} item={el} />);
    }
    if (searchData.length > 0) {
      if (dataToRender.length === 0) {
        return (
          <div className="grow">
            <h1>not found:(</h1>
          </div>
        );
      }
    }
  }, [dataToRender, searchData]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="flex grow flex-wrap mt-16 mb-16 gap-4 flex justify-center">
      {memoRenderList}
    </div>
  );
};

export default ProductList;
