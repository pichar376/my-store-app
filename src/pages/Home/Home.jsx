import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductList from "../ProductList/ProductList";

const Home = () => {
  return (
    <div className="w-full h-screen mt3 border-2 border-slate-800 flex flex-col justfy-center items-center">
      <NavBar />
      <ProductList />
      <div className="grow"></div>
      <Footer />
    </div>
  );
};

export default Home;
