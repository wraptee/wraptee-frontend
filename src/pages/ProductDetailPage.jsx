import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import productData from "../utils/product";
import "../styles/productDetail.css";
import { useCart } from "../store/cartContext";

const ProductDetailPage = () => {
  const { sku } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Find the product details based on the sku from the URL
  const product = productData.find((product) => product.sku === sku);

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Box className="product-detail-container">
      <Grid container spacing={4} className="product-detail-grid">
        {/* Product Image */}
        <Grid item xs={12} sm={6} className="product-image-container">
          <Card className="product-image-card">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
          </Card>
        </Grid>

        {/* Product Details */}
        <Grid
          item
          xs={12}
          sm={6}
          className="product-details-container"
          flexDirection={"column"}
          justifyContent={"center"}
          gap={2}
        >
          <Typography variant="h4" color="#ff6347" fontWeight={600}>
            {product.name}
          </Typography>
          <Typography variant="h6" color="#ff6347" className="product-price">
            ₹{product.price}
          </Typography>
          <Typography
            variant="body1"
            color="#ff6347"
            className="product-description"
          >
            {product.description}
          </Typography>
          <Button
            variant="contained"
            color="optional"
            className="add-to-cart-button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>

      {/* Related Products */}
      <Box className="related-products">
        <Typography
          variant="h4"
          color="optional"
          textAlign={"center"}
          marginTop={4}
          mb={4}
          fontWeight={600}
        >
          Related Products
        </Typography>
        <Grid container spacing={2}>
          {productData
            .filter(
              (relatedProduct) =>
                relatedProduct.category === product.category &&
                relatedProduct.sku !== product.sku
            )
            .map((relatedProduct) => (
              <Grid item xs={12} sm={4} md={3} key={relatedProduct.sku}>
                <Card
                  className="related-product-card"
                  onClick={() => navigate(`/product/${relatedProduct.sku}`)}
                >
                  <img
                    src={relatedProduct.imageUrl}
                    alt={relatedProduct.name}
                    className="related-product-image"
                  />
                  <CardContent>
                    <Typography
                      color="#ff6347"
                      variant="h6"
                      fontWeight={600}
                      textAlign={"center"}
                    >
                      {relatedProduct.name}
                    </Typography>
                    <Typography
                      color="#ff6347"
                      variant="body2"
                      textAlign={"center"}
                    >
                      {relatedProduct.description}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="optional"
                      textAlign={"center"}
                    >
                      ₹{relatedProduct.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductDetailPage;
