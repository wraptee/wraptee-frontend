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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useCart } from "../store/cartContext";
import "../styles/cartPage.css";
import { useNavigate } from "react-router-dom";
import { HourglassEmpty } from "@mui/icons-material";
import { sendOrderToBackend } from "../services/authService"; // Import the service

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
    user,
  } = useCart();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // success, error, info, warning
  });
  const [checkoutDialogOpen, setCheckoutDialogOpen] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false); // For loading state during checkout

  const navigate = useNavigate();

  // Open Snackbar
  const handleOpenSnackbar = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  // Close Snackbar
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };
  const BASE_URL = "https://wraptee-backend.vercel.app/api";

  // Handle checkout
  const handleCheckout = async () => {
    if (cart.length === 0) return;

    const formData = new FormData();
    formData.append("name", user?.name || "Guest");
    formData.append("email", user?.email || "guest@example.com");
    formData.append("phoneNumber", user?.phoneNumber || "Not Provided");

    // Append cart items to FormData
    cart.forEach((product, index) => {
      // Prepend BASE_URL to imageUrl if it is a relative path
      const fullImageUrl = product.imageUrl.startsWith("/")
        ? BASE_URL + product.imageUrl
        : product.imageUrl;

      formData.append(`cart[${index}][imageUrl]`, fullImageUrl);
      formData.append(`cart[${index}][name]`, product.name);
      formData.append(`cart[${index}][sku]`, product.sku);
      formData.append(`cart[${index}][price]`, product.price);
      formData.append(`cart[${index}][quantity]`, product.quantity);
      formData.append(`cart[${index}][category]`, product.category);
      formData.append(`cart[${index}][description]`, product.description);
    });

    // Append product images
    cart.forEach((product, index) => {
      const fullImageUrl = product.imageUrl.startsWith("/")
        ? BASE_URL + product.imageUrl
        : product.imageUrl;

      formData.append(`productImages[${index}]`, fullImageUrl);
    });

    setCheckoutLoading(true);

    try {
      const response = await sendOrderToBackend(formData);

      if (response.success) {
        clearCart(); // Clear the cart after successful checkout
        setCheckoutDialogOpen(true); // Open success dialog
      } else {
        handleOpenSnackbar(
          response.message || "Failed to place the order",
          "error"
        );
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      handleOpenSnackbar("Something went wrong. Please try again.", "error");
    } finally {
      setCheckoutLoading(false);
    }
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
          {`Hello ${user?.name} here is your Cart 😊`}
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
              onClick={() => navigate("/")}
              color="inherit"
              style={{ cursor: "pointer" }}
            >
              Your cart is empty. Click here to do more shopping!
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
                          "Removed 1 quantity from the cart",
                          "error"
                        );
                        updateQuantity(product.sku, product.quantity - 1);
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
                        updateQuantity(product.sku, product.quantity + 1);
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
                      removeFromCart(product.sku);
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
            onClick={handleCheckout}
            disabled={checkoutLoading}
          >
            {checkoutLoading ? <HourglassEmpty /> : "Proceed to Checkout"}
          </Button>
        </Box>
      )}

      {/* Snackbar for notifications */}
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

      {/* Dialog for successful order placement */}
      <Dialog
        open={checkoutDialogOpen}
        onClose={() => setCheckoutDialogOpen(false)}
      >
        <DialogTitle sx={{ color: "#FF6347" }}>Congratulations!</DialogTitle>
        <DialogContent sx={{ color: "#FF6347" }}>
          Your order has been placed. Our delivery team will contact you
          shortly.
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setCheckoutDialogOpen(false);
              navigate("/");
            }}
            variant="contained"
            color="optional"
            sx={{ color: "white" }}
          >
            Go to Home
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CartPage;
