import { useEffect, useState } from "react";
import classNames from "classnames";
import { IData } from "../../types";
import arrow from "../../images/arrow.svg";
import "./TreeItem.scss";

interface ITreeItem {
  item: IData;
  selectedProduct: IData | null;
  setSelectedProduct: (product: IData) => void;
}

export const TreeItem = ({
  item,
  selectedProduct,
  setSelectedProduct,
}: ITreeItem) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isVisible, children, open, name, id, description } = item;

  const buttonClass = classNames({
    treeItem__button: true,
    treeItem__button_last: !children,
    treeItem__button_selected:
      selectedProduct !== null && selectedProduct.id === id,
  });

  const arrowClass = classNames({
    treeItem__arrow: true,
    treeItem__arrow_rotete: isOpen,
  });

  const handleClick = () => {
    children ? setIsOpen(!isOpen) : setSelectedProduct(item);
  };

  useEffect(() => {
    if (isVisible && children && open) {
      setIsOpen(open);
    }
  }, [open, children, isVisible]);

  return (
    <>
      {isVisible !== false && (
        <div className="treeItem">
          <button
            className={buttonClass}
            data-tooltip={description}
            onClick={handleClick}
          >
            {children && <img className={arrowClass} src={arrow} />}
            {name}
          </button>
          {isOpen &&
            children.map((item: IData) => (
              <TreeItem
                key={item.id}
                item={item}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
              />
            ))}
        </div>
      )}
    </>
  );
};
