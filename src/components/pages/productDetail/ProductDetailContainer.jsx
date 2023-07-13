import { useContext, useEffect, useState } from "react";
import { ProductDetail } from "./ProductDetail";
import { database } from "../../../firebaseConfig";
import { CartContext } from "../../../context/CartContext";

import { useParams } from "react-router-dom";
import { collection, getDoc, doc } from "firebase/firestore";

import Swal from "sweetalert2";

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

export const ProductDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { addToCart, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const qty = getQuantityById(id);

  const onAdd = (qty) => {
    let data = {
      ...productSelected,
      quantity: qty,
    };

    addToCart(data);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se agregó al Carrito",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  useEffect(() => {
    let productsCollection = collection(database, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelected({ id: res.id, ...res.data() });
    });
  }, [id]);

  return (
    <ProductDetail
      productSelected={productSelected}
      qty={qty}
      addToCart={addToCart}
      onAdd={onAdd}
    />
  );
};
