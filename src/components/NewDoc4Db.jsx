import { products } from "../productsMock";
import { database } from "./../firebaseConfigpm";

import { Button } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

/*Una vez que se haya ejecutado esta secuencia se puede borrar la ruta que lo referencia.

 {
    id: "newDoc",
    path: "/newdoc",
    Element: NewDoc4Db,
  },      */

export const NewDoc4Db = () => {
  let productsCollection = collection(database, "products");
  const fulFill = () => {
    products.forEach((product) => {
      addDoc(productsCollection, product);
    });
  };

  return (
    <div>
      <Button variant="contained" onClick={fulFill}>
        Rellenar la coleción con productos
      </Button>
    </div>
  );
};
