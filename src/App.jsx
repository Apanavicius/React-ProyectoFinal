import "./App.css";
import { Layout } from "./components/layout/Layout";
import { ItemListContainer } from "./components/pages/itemList/ItemListContainer";
import { ProductDetailContainer } from "./components/pages/productDetail/ProductDetailContainer";
import { CartContainer } from "./components/pages/cart/CartContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/ProductDetail/:id"
              element={<ProductDetailContainer />}
            />
            <Route
              path="/category/:categorieSelection"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
          </Route>
          <Route path="*" element={<h3>La ruta no existe</h3>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
