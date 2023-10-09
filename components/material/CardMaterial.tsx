import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Rating } from "@mui/material";
import { Product } from "@/types/Products";
import Modal from "@/components/material/Modal";

export default function CardMaterial(props: Product) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.price}
          </Typography>
          <Rating
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Comprar
        </Button> */}
        <Modal name={props.name} price={props.price} image={props.image} />
      </CardActions>
    </Card>
  );
}
