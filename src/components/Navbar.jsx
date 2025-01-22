import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Link,
  Badge,
} from "@mui/material";
import logo from "../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useCart } from "../store/cartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Access cart and user details from context
  const { getTotalQuantity, user, logoutUser } = useCart();

  const handleSearch = (event) => {
    if (event.key === "Enter" && searchQuery.trim()) {
      navigate(`/category/all/search/${encodeURIComponent(searchQuery)}`);
      setSearchQuery(""); // Clear the search bar
    }
  };

  const handleLogin = () => {
    // Navigate to the login screen
    navigate("/login");
  };

  const handleLogout = () => {
    // Clear user data and navigate back to the home screen
    logoutUser();
    navigate("/");
  };

  const handleCartClick = () => {
    navigate("/cart"); // Redirect to the cart page
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link
          onClick={() => navigate("/")}
          color="inherit"
          underline="hover"
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="Logo" style={{ height: 80 }} />
        </Link>

        {/* Search Bar */}
        <TextField
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products or categories..."
          onKeyDown={handleSearch}
          variant="outlined"
          size="small"
          className="navbar-search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Navigation Buttons and User Info */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/products")}>
            Products
          </Button>

          {/* Login/Logout Buttons */}
          {!user ? (
            <Button
              color="inherit"
              onClick={handleLogin}
              style={{ marginLeft: 16 }}
            >
              Login
            </Button>
          ) : (
            <>
              <Typography
                variant="body1"
                style={{
                  marginLeft: 16,
                  color: "#fff",
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
              >
                {user.name}
              </Typography>
              <Button
                color="inherit"
                onClick={handleLogout}
                style={{ marginLeft: 16 }}
              >
                Logout
              </Button>
            </>
          )}
          {/* Cart Icon */}
          <div className="navbar-cart-link" onClick={handleCartClick}>
            <Badge
              badgeContent={getTotalQuantity()}
              color="error"
              overlap="circular"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                "& .MuiBadge-dot": {
                  backgroundColor: "#ff6347", // Tomato color for the dot
                },
                "& .MuiBadge-colorError": {
                  backgroundColor: "#ff6347 !important", // Tomato color for the badge
                  color: "#ffffff", // White text
                },
              }}
            >
              <ShoppingCartIcon fontSize="large" sx={{ color: "white" }} />
            </Badge>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
