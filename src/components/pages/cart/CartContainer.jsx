import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CartContainer = () => {
  const navigate = useNavigate();

  const compraEfectuada = () => {
    alert("Se compraron los productos");
    navigate("/");
  };

  return (
    <div>
      <h2>CartContainer</h2>
      <button onClick={compraEfectuada}>Comprar!</button>
    </div>
  );
};
