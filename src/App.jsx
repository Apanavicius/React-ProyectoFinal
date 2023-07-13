import "./App.css";
import { Layout } from "./components/layout/Layout";
import { menuRoutes } from "./routes/menuRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              {menuRoutes.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))}
            </Route>

            <Route path="*" element={<h3>La ruta no existe</h3>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

/*


import { ItemListContainer } from "./components/pages/itemList/ItemListContainer";
import { ProductDetailContainer } from "./components/pages/productDetail/ProductDetailContainer";
import { CartContainer } from "./components/pages/cart/CartContainer";

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
*/
