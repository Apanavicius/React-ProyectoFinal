import { Button } from "@mui/material";
import { Link } from "react-router-dom";

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

export const Cart = ({
  cart,
  whipeAll,
  removeElementById,
  getTotalPrice,
  getCumulativeSum,
}) => {
  return (
    <div>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((product) => {
            return (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.title} />
                <div className="cart-item-info">
                  <h2>{product.title} </h2>
                  <h3>${product.price}</h3>
                  <h3>Cantidad:{product.quantity} </h3>
                </div>
                <Button
                  variant="contained"
                  onClick={() => removeElementById(product.id)}
                >
                  Eliminar
                </Button>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <h1>Detalle de compra</h1>
          <h2>Cantidad de productos: {getCumulativeSum()} </h2>
          <h2>El total del carrito es ${getTotalPrice()}</h2>
          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button onClick={whipeAll} variant="contained">
                Vaciar carrito
              </Button>
              <Link to="/checkout">
                <Button variant="contained">Finalizar compra</Button>
              </Link>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained">Seguir comprando</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

//<button onClick={realizarCompra}> Comprar! </button>
