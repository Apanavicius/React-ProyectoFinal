import { useEffect, useState } from "react";
import { ProductDetail } from "./ProductDetail";
import { products } from "../../../productsMock";

export const ProductDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  let id = 5;

  useEffect(() => {
    let productFounded = products.find((product) => product.id === id);
    const getProduct = new Promise((res, rej) => {
      res(productFounded);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);
  console.log("El producto seleccionado es:", productSelected);

  return <ProductDetail productSelected={productSelected} />;
};
