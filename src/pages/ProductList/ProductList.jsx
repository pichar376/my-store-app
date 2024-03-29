import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useGetData } from "../../hooks/useGetData";
import { setProducts } from "../../features/shoppingReducer/shoppingSlice";
import { useMemo } from "react";
import { MdRestaurantMenu } from "react-icons/md";
import Loading from "../../components/Loader/Loader";
import ModalProductDetail from "../../components/ModalProductDetail/ModalProductDetail";
import useModal from "../../hooks/useModal";
import NotFound from "../../components/NotFound/NotFound";

const ProductList = ({ dataToRender, loading }) => {
  const searchData = useSelector((state) => state.shoppingData.search);

  const [openModal, closeModal, isActiveModal] = useModal(false);

  //function to render the product detail if the modal state is active
  const renderModal = () => {
    return (
      <ModalProductDetail
        closeModal={closeModal}
        isActiveModal={isActiveModal}
      />
    );
  };

  const renderList = () => {
    if (dataToRender > 0) {
      return dataToRender?.map((el, id) => <ProductCard key={id} item={el} />);
    }
  };

  const memoRenderList = useMemo(() => {
    if (dataToRender?.length > 0) {
      return dataToRender?.map((el, id) => (
        <ProductCard key={id} item={el} onOpenModal={openModal} />
      ));
    }
    if (searchData.length > 0) {
      if (dataToRender.length === 0) {
        return <NotFound>Not found Products </NotFound>;
      }
    }
  }, [dataToRender, searchData]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div
      className={`flex grow flex-wrap mt-16 mb-16 gap-4 flex justify-center overflow-x-hidden w-100`}
    >
      {isActiveModal && renderModal()}
      {memoRenderList}
    </div>
  );
};

export default ProductList;
