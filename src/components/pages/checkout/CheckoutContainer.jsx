import { Checkout } from "./Checkout";
import { database } from "../../../firebaseConfig";

import { CartContext } from "../../../context/CartContext";

import * as Yup from "yup";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

import { useFormik } from "formik";
import { useContext } from "react";
import { useState } from "react";

//getDocs, query, where
//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

export const CheckoutContainer = () => {
  const { cart, clearAll, getTotalPrice } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (data) => {
      //Aquí está el Vínculo con API del Back.
      let poDocument = {
        buyer: data,
        items: cart,
        total: getTotalPrice(),
      };
      let poCollection = collection(database, "purchaseOrders");
      addDoc(poCollection, poDocument).then((res) => setOrderId(res.id));

      cart.forEach((product) => {
        //updateDoc( (dónde actualizar), {con qué actualizar} )
        updateDoc(doc(database, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });

      clearAll();
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Es necesario completar este campo")
        .min(4, "Debe tener al menos 4 caracteres"),
      email: Yup.string()
        .required("Es necesario completar este campo")
        .email("No es un email válido"),
    }),
  });

  return (
    <div>
      {orderId ? (
        <h1>Compra exitosa! Tu comprobante: {orderId}</h1>
      ) : (
        <Checkout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};
