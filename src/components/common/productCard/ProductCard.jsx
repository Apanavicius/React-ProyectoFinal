import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

const ProductCard = ({ item }) => {
  //el maxWidth de abajo se pude cambiar por width..
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 300 }} image={item.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/ProductDetail/${item.id}`}>
            <Button size="small" variant="contained">
              Ver detalle
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
