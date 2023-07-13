import { useEffect, useState } from "react";
import { database } from "../../../firebaseConfig";
import { ItemList } from "./ItemList";

import { useParams } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import { collection, getDocs, query, where } from "firebase/firestore";

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categorySelected } = useParams();

  useEffect(() => {
    let productsCollection = collection(database, "products");

    let consulta;

    // If categorySelected is falsy => Show everything (I'm in home).
    // Case not, show respective content category.
    !categorySelected
      ? (consulta = productsCollection)
      : (consulta = query(
          productsCollection,
          where("category", "==", categorySelected)
        ));

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((element) => {
          return {
            id: element.id,
            ...element.data(),
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categorySelected]);

  return (
    <>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <ClockLoader color="#1e0f67" size={100} speedMultiplier={1} />
      )}
    </>
  );
};

// https://www.davidhu.io/react-spinners/storybook/?path=/docs/clockloader--main
