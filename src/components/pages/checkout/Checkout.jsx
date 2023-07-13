import { Button, TextField } from "@mui/material";

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

export const Checkout = ({ handleSubmit, handleChange, errors }) => {
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
