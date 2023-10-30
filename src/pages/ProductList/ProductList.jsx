import ProductCard from "../../components/ProductCard/ProductCard";
import { useGetData } from "../../hooks/useGetData";

const url = "https://fakestoreapi.com/products";
const ProductList = () => {
  const { data, loading } = useGetData(url);

  return (
    <div className="flex grow flex-wrap mt-16 mb-16 gap-4 flex justify-center">
      {data.map((el, index) => (
        <ProductCard key={index} item={el} />
      ))}
    </div>
  );
};

export default ProductList;
