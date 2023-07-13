import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";
//import { CheckoutContainer } from "../checkout/CheckoutContainer";
import { Cart } from "./Cart";

import Swal from "sweetalert2";

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

export const CartContainer = () => {
  const { cart, clearAll, removeElementById, getTotalPrice, getCumulativeSum } =
    useContext(CartContext);

  const navigate = useNavigate();

  const whipeAll = () => {
    Swal.fire({
      title: "¿Seguro de vaciar el contenido?",
      showDenyButton: true,
      //showCancelButton: true,
      confirmButtonText: "Sí, vaciar!",
      denyButtonText: `No, mejor no..`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearAll();
        Swal.fire("Carrito Vacío", "(No quedó nada)", "success");
        navigate("/");
      } else if (result.isDenied) {
        Swal.fire("Dejamos todo igual", "(No tocamos nada)", "success");
      }
    });
  };

  return (
    <div>
      <Cart
        cart={cart}
        whipeAll={whipeAll}
        removeElementById={removeElementById}
        getTotalPrice={getTotalPrice}
        getCumulativeSum={getCumulativeSum}
      />
    </div>
  );
};
