import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
      // reject("La promesa no pudo resolverse");
    });

    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log("catch:", err);
      });
  }, []);

  return <ItemList items={items} />;
};
