import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

//  -  -  -  NO ESTÁ IMPLEMENTADO, CÓDIGO DE PRUEBA -  -  -  -  -  -

export const Form = () => {
  // esto es parte de algún container
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (data) => {
      //Aquí está el Vínculo con API del Back.
      console.log("data adquirida:", data);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Es necesario completar este campo")
        .min(4, "Debe tener al menos 4 caracteres"),
      email: Yup.string()
        .required("Es necesario completar este campo")
        .email("No es un email válido"),
      phone: Yup.number()
        .required("Es necesario completar este campo")
        .min(8, "No es un número válido"),
    }),
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
          error={errors.name ? true : false}
          helperText={errors.name}
        />

        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Phone No."
          variant="outlined"
          name="phone"
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};
