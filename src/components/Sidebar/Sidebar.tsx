import { useContext, useState } from "react";
import { Tree } from "../Tree/Tree";
import { DataContext } from "../../context/DataContext";
import { IData } from "../../types";
import searchIcon from "../../images/search.svg";
import "./Sidebar.scss";

interface ISidebar {
  selectedProduct: IData | null;
  setSelectedProduct: (product: IData) => void;
}

export const Sidebar = ({ selectedProduct, setSelectedProduct }: ISidebar) => {
  const data = useContext(DataContext);
  const [value, setValue] = useState<string>("");

  const handleChange = (data: IData[], value: string) => {
    data.forEach((dataItem: IData) => {
      setValue(value);
      if (!value.length) {
        dataItem.isVisible = true;
        dataItem.open = false;
      } else {
        if (!dataItem.children) {
          dataItem.isVisible = dataItem.name
            .toLowerCase()
            .includes(value.toLowerCase());
          dataItem.open = true;
        } else {
          dataItem.isVisible = false;
          dataItem.open = false;
        }
      }
      if (dataItem.children) {
        handleChange(dataItem.children, value);
        if (dataItem.children.some((child: IData) => child.isVisible)) {
          dataItem.isVisible = true;
        }
        if (dataItem.children.some((child: IData) => child.open)) {
          dataItem.open = true;
        }
      }
    });
  };

  return (
    <div className="sidebar">
      <div className="sidebar__searchField">
        <img
          className="sidebar__searchIcon"
          src={searchIcon}
          alt="Иконка поиска"
        />
        <input
          className="sidebar__input"
          type="text"
          value={value}
          onChange={(e) => handleChange(data, e.target.value)}
          placeholder="Введите название товара..."
        />
      </div>

      <Tree
        setSelectedProduct={setSelectedProduct}
        selectedProduct={selectedProduct}
      />
    </div>
  );
};
