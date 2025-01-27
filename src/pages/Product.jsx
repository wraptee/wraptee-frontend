import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import productData from "../utils/product";
import { useNavigate } from "react-router-dom";
import "../styles/product.css";

const ProductPage = () => {
  const navigate = useNavigate();
  const products = []; // Replace with dynamic product data

  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        gutterBottom
        textAlign={"center"}
        color="optional"
        fontWeight={600}
        mb={4}
      >
        Products
      </Typography>
      <Grid container spacing={4}>
        {productData.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.sku}>
            <Card
              className="category-card"
              onClick={() => navigate(`/product/${product.sku}`)}
            >
              <div className="category-image-container">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="category-image"
                />
              </div>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: "#ff6347" }}
                  fontWeight={600}
                >
                  {product.name}
                </Typography>
                {/* <Typography color="optional" variant="body2">
                {product.description}
              </Typography> */}
                <Typography color="optional" variant="body1">
                  ₹{product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductPage;
