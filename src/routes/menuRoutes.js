import { CartContainer } from "../components/pages/cart/CartContainer";
import { ItemListContainer } from "../components/pages/itemList/ItemListContainer";
import { ProductDetailContainer } from "../components/pages/productDetail/ProductDetailContainer";
import { Form } from "../components/pages/form/Form";
import { CheckoutContainer } from "../components/pages/checkout/CheckoutContainer";
import { NewDoc4Db } from "../components/NewDoc4Db";

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },

  {
    id: "productDetail",
    path: "/ProductDetail/:id",
    Element: ProductDetailContainer,
  },

  {
    id: "categories",
    path: "/category/:categorySelected",
    Element: ItemListContainer,
  },

  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },

  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },

  // Se utiliza sólo para cargar productos. Ruta oculta, no vinculada.
  // Restaría probar esto con una validación de usuario antes de ingresar.
  {
    id: "newDoc",
    path: "/newdoc",
    Element: NewDoc4Db,
  },

  //El siguiente es de prueba
  {
    id: "form",
    path: "/form",
    Element: Form,
  },
];
