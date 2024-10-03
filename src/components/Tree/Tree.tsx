import { useContext } from "react";
import { TreeItem } from "../TreeItem/TreeItem";
import { DataContext } from "../../context/DataContext";
import { IData } from "../../types";
import "./Tree.scss";

interface ITree {
  selectedProduct: IData | null;
  setSelectedProduct: (product: IData) => void;
}

export const Tree = ({ selectedProduct, setSelectedProduct }: ITree) => {
  const data = useContext(DataContext);

  return (
    <div className="tree">
      {data?.map((item: IData) => (
        <TreeItem
          key={item.id}
          item={item}
          setSelectedProduct={setSelectedProduct}
          selectedProduct={selectedProduct}
        />
      ))}
    </div>
  );
};
