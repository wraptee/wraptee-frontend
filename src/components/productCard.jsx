// components/ProductCard.jsx
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const ProductCard = ({ product }) => (
  <Card>
    <CardMedia
      component="img"
      alt={product.name}
      height="140"
      image={product.image}
    />
    <CardContent>
      <Typography variant="h6">{product.name}</Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href={`/customize/${product.id}`}
      >
        Customize
      </Button>
    </CardContent>
  </Card>
);

export default ProductCard;
