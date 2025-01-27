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
  Avatar,
  Divider,
} from "@mui/material";
import logo from "../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useCart } from "../store/cartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import ImageLinks from "../utils/imageLink";

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
    setDrawerOpen(false);
    navigate("/login");
  };

  const handleLogout = () => {
    setDrawerOpen(false);
    logoutUser();
    navigate("/");
  };

  const handleCartClick = () => {
    setDrawerOpen(false);
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

        {/* Search Bar */}
        <TextField
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search.."
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
            width: { sm: "225px", xs: "100px" }, // Adjust width for mobile
          }}
        />

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
                Welcome, {user.name} 😊
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
          {user && (
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
          )}
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
        <List
          className="no-bullets"
          sx={{ listStyleType: "none", listStyle: "none", paddingLeft: 0 }}
        >
          <ListItem button>
            <Typography variant="body2" color="textSecondary"></Typography>
          </ListItem>
          <ListItem
            color="inherit"
            underline="hover"
            sx={{ listStyleType: "none" }}
          >
            <img
              src={ImageLinks.blackLogo}
              alt="Logo"
              className="navbar-logo"
            />
          </ListItem>
          {user?.name && (
            <ListItem button>
              <Typography variant="h6" color="optional">
                Welcome, {user?.name} 😊
              </Typography>
            </ListItem>
          )}

          <Divider />
          <ListItem
            button
            onClick={() => {
              setDrawerOpen(false);
              navigate("/");
            }}
          >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setDrawerOpen(false);
              navigate("/products");
            }}
          >
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
          <ListItem button onClick={handleCartClick} color="optioanl">
            <ListItemText primary="Cart" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
