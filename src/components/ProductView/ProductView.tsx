import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductView.scss";

export const ProductView = ({ selectedProduct }: any) => {
  return (
    <div className="productView">
      {selectedProduct ? (
        <ProductCard selectedProduct={selectedProduct} />
      ) : (
        <p className="productView__text">Выберите товар</p>
      )}
    </div>
  );
};
