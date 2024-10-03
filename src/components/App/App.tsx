import axios from "axios";
import { useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { Sidebar } from "../Sidebar/Sidebar";
import { ProductView } from "../ProductView/ProductView";
import { IData } from "../../types";
import { BASE_URL } from "../../constants";
import "./App.scss";

function App() {
  const [data, setData] = useState<IData[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios(BASE_URL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p className="app__infoMessage">Загрузка...</p>;
  }

  if (error) {
    return <p className="app__infoMessage">{error}</p>;
  }

  return (
    <DataContext.Provider value={data}>
      <div className="app">
        <Sidebar
          setSelectedProduct={setSelectedProduct}
          selectedProduct={selectedProduct}
        />
        <ProductView selectedProduct={selectedProduct} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
