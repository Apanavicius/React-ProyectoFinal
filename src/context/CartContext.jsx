import { useState } from "react";
import { createContext } from "react";

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

//En la línea debajo se crea el contexto global.

export const CartContext = createContext();

//Aquí se genera el componente proveedor del contexto.

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (aSelectedProduct) => {
    let exist = isInCart(aSelectedProduct.id);

    if (exist) {
      let newArr = cart.map((product) => {
        if (product.id === aSelectedProduct.id) {
          return {
            ...product,
            quantity: product.quantity + aSelectedProduct.quantity,
          };
        } else {
          return product;
        }
      });
      setCart(newArr);
    } else {
      setCart([...cart, aSelectedProduct]);
    }
  };

  const isInCart = (aSelectedProductId) => {
    //let exist = cart.some((element) => element.id === aSelectedProductId);
    // return exist;
    return cart.some((element) => element.id === aSelectedProductId);
  };

  const clearAll = () => {
    setCart([]);
  };

  const getCumulativeSum = () => {
    return cart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
  };

  const getQuantityById = (aProductId) => {
    return cart.find((product) => product.id === aProductId)?.quantity;
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
  };

  const removeElementById = (aProductId) => {
    setCart(cart.filter((product) => product.id !== aProductId));
  };

  //Nota (1)
  let data = {
    cart,
    addToCart,
    clearAll,
    getCumulativeSum,
    getQuantityById,
    getTotalPrice,
    removeElementById,
  };

  //Nota (2)
  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export default CartContextProvider;

/*
Nota (1):
· cart: cart (Si la propiedad es igual al valor, por abreviación, se puede escribir una única vez.
Es decir, si cart: cart => abreviar escribiendo solamente cart.
let data { cart: cart } => let data { cart }

Nota (2): se empaqueta la información para pasar a los children mediante el objeto data.
· Syntax:  <CartContext.Provider value = { (var_a, var_b, var_c)} > ..... 
           <CartContext.Provider value = { data } > ..... 
*/
