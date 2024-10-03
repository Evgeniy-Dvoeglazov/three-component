import { IData } from "../../types";
import "./ProductCard.scss";

interface IProductCard {
  selectedProduct: IData;
}

export const ProductCard = ({ selectedProduct }: IProductCard) => {
  const { name, image, text } = selectedProduct;

  return (
    <div className="productCard">
      <img className="productCard__image" src={image} alt="фото" />
      <h1 className="productCard__title">{name}</h1>
      <p>{text}</p>
    </div>
  );
};
