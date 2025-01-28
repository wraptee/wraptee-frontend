import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import productData from "../utils/product";
import "../styles/productDetail.css";
import { useCart } from "../store/cartContext";

const ProductDetailPage = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // success, error, info, warning
  });
  const { sku } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); // Detect location changes
  const { addToCart, user } = useCart();

  // Find the product details based on the sku from the URL
  const product = productData.find((product) => product.sku === sku);

  // Open Snackbar
  const handleOpenSnackbar = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  // Close Snackbar
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const onHandleCart = () => {
    if (user) {
      addToCart(product);
      handleOpenSnackbar("Product added to cart", "success");
    } else {
      handleOpenSnackbar("Please login first for shopping", "error");
      navigate("/login");
    }
  };

  // Scroll to top whenever the location changes (i.e., the page changes)
  useEffect(() => {
    // Delay scroll action to ensure DOM is fully rendered
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // Adjust the timeout value if needed
  }, [location]); // Dependency on location to trigger scroll on route change

  // If no product is found, show a message
  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  const handleProductClick = (relatedProductSku) => {
    navigate(`/product/${relatedProductSku}`);
  };

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
            color="optional"
            className="product-description"
          >
            {product.description}
          </Typography>
          <Button
            variant="contained"
            color="optional"
            sx={{ color: "white" }}
            className="add-to-cart-button"
            onClick={onHandleCart}
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
          textAlign="center"
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
              <Grid item xs={12} sm={6} md={3} key={relatedProduct.sku}>
                <Card
                  className="related-product-card"
                  onClick={() => handleProductClick(relatedProduct.sku)}
                >
                  <Box className="related-product-image-container">
                    <img
                      src={relatedProduct.imageUrl}
                      alt={relatedProduct.name}
                      className="related-product-image"
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      color="#ff6347"
                      variant="h6"
                      fontWeight={600}
                      textAlign="center"
                    >
                      {relatedProduct.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="optional"
                      textAlign="center"
                    >
                      ₹{relatedProduct.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ marginTop: 5 }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProductDetailPage;
