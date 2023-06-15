import "./App.css";
import { NavBar } from "./components/layout/navbar/NavBar";
import { ItemListContainer } from "./components/pages/itemList/ItemListContainer";
import { ProductDetailContainer } from "./components/pages/productDetail/ProductDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <ProductDetailContainer />
    </div>
  );
  /*
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="*" element={<h1>La ruta no existe</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );      */
};

export default App;

/*
{
  <div>
      <NavBar> 
      <ItemListContainer />
      <ProductDetailContainer />
      </NavBar>
</div>
}     */
