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
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import logo from "../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useCart } from "../store/cartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Access cart and user details from context
  const { getTotalQuantity, user, logoutUser } = useCart();

  const handleSearch = (event) => {
    if (event.key === "Enter" && searchQuery.trim()) {
      navigate(`/category/all/search/${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar className="navbar-toolbar">
        {/* Logo */}
        <Link
          onClick={() => navigate("/")}
          color="inherit"
          underline="hover"
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>

        {/* Mobile Hamburger Menu */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => toggleDrawer(true)}
          sx={{ display: { xs: "block", sm: "none" } }} // Show on mobile only
        >
          <MenuIcon />
        </IconButton>

        {/* Search Bar */}
        <TextField
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for categories..."
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
          sx={{
            display: { xs: "none", sm: "block" }, // Hide search on mobile
            marginLeft: "16px",
            width: { sm: "400px", xs: "100px" }, // Adjust width for mobile
          }}
        />

        {/* For desktop: Buttons should be hidden on mobile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            display: { xs: "none", sm: "flex" }, // Hide for mobile
          }}
          className="navbar-buttons"
        >
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/products")}>
            Products
          </Button>

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
          <div className="navbar-cart-link" onClick={handleCartClick}>
            <Badge
              badgeContent={getTotalQuantity()}
              color="error"
              overlap="circular"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <ShoppingCartIcon fontSize="large" sx={{ color: "white" }} />
            </Badge>
          </div>
        </div>
      </Toolbar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          display: { xs: "block", sm: "none" }, // Show only on mobile view
        }}
      >
        <List>
          <ListItem button onClick={() => navigate("/")}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => navigate("/products")}>
            <ListItemText primary="Products" />
          </ListItem>
          {!user ? (
            <ListItem button onClick={handleLogin}>
              <ListItemText primary="Login" />
            </ListItem>
          ) : (
            <>
              <ListItem button onClick={handleLogout}>
                <ListItemText primary="Logout" />
              </ListItem>
            </>
          )}
          <ListItem button onClick={handleCartClick}>
            <ListItemText primary="Cart" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
