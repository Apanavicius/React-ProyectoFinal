import { useEffect, useState } from "react";
import { ProductDetail } from "./ProductDetail";
import { products } from "../../../productsMock";

import { useParams } from "react-router-dom";

export const ProductDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    let productFounded = products.find((product) => product.id === Number(id));
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
