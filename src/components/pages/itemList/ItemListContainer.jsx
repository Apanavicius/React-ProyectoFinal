import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categorieSelection } = useParams();

  useEffect(() => {
    let filteredItems = products.filter(
      (item) => item.categorie === categorieSelection
    );
    const tarea = new Promise((resolve) => {
      resolve(categorieSelection ? filteredItems : products);
    });

    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log("catch:", err);
      });
  }, [categorieSelection]);

  return <ItemList items={items} />;
};
