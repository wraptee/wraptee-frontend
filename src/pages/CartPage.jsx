import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Snackbar,
  Alert,
  Link,
} from "@mui/material";
import { useCart } from "../store/cartContext";
import "../styles/cartPage.css";
import { useNavigate } from "react-router-dom";
import { HourglassEmpty } from "@mui/icons-material";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // success, error, info, warning
  });

  // Open Snackbar
  const handleOpenSnackbar = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  // Close Snackbar
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleRemove = (sku) => {
    removeFromCart(sku);
  };

  const handleQuantityChange = (sku, quantity) => {
    if (quantity > 0) {
      updateQuantity(sku, quantity);
    }
  };
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <Box className="cart-container">
      {cart.length !== 0 ? (
        <Typography
          variant="h4"
          color="optional"
          textAlign="center"
          marginBottom={4}
        >
          Your Cart
        </Typography>
      ) : (
        ""
      )}

      <Grid container spacing={3}>
        {cart.length === 0 ? (
          <Typography
            variant="h6"
            color="optional"
            textAlign="center"
            width="100%"
            height={"auto"}
            mt={"5%"}
            className="link-to-home"
          >
            <Link
              onClick={() => navigateTo("/")}
              color="inherit"
              style={{ cursor: "pointer" }}
            >
              Your cart is empty click to do more shoppig !!.
            </Link>
          </Typography>
        ) : (
          cart.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.sku}>
              <Card className="cart-product-card">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="cart-product-image"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    color="optional"
                    textAlign={"center"}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="optional"
                    textAlign={"center"}
                    fontSize={16}
                    fontWeight={600}
                    mt={2}
                  >
                    Price: ₹{product.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="optional"
                    textAlign={"center"}
                    mt={2}
                  >
                    <span
                      style={{ fontSize: 16, padding: 6, color: "#ff6347" }}
                    >
                      Quantity:{" "}
                    </span>

                    <Button
                      onClick={() => {
                        handleOpenSnackbar(
                          "Removed 1 quatity from the cart",
                          "error"
                        );
                        handleQuantityChange(product.sku, product.quantity - 1);
                      }}
                      variant="outlined"
                    >
                      -
                    </Button>
                    <span
                      style={{
                        fontSize: 16,
                        padding: 6,
                        color: "#ff6347",
                        fontWeight: "600",
                      }}
                    >
                      {product.quantity}
                    </span>
                    <Button
                      onClick={() => {
                        handleQuantityChange(product.sku, product.quantity + 1);
                        handleOpenSnackbar("Product added to cart", "success");
                      }}
                      variant="outlined"
                    >
                      +
                    </Button>
                  </Typography>

                  <Button
                    variant="outlined"
                    color="optional"
                    onClick={() => {
                      handleRemove(product.sku);
                      handleOpenSnackbar("Product removed from cart", "error");
                    }}
                    sx={{
                      bottom: 10,
                      left: "30%",
                      mt: 5,
                    }}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>

      {cart.length > 0 && (
        <Box className="cart-summary">
          <Typography variant="h5" color="optional">
            Total Price: ₹{getTotalPrice()}
          </Typography>
          <Button
            variant="outlined"
            color="optional"
            onClick={() => console.log("Proceed to Checkout")}
          >
            Proceed to Checkout
          </Button>
        </Box>
      )}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
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

export default CartPage;
