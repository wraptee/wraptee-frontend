import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"; // Import the Up arrow icon
import "../styles/footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <div className="fixed-footer">
      <Box
        sx={{
          backgroundColor: "#000000", // Theme primary color (black)
          color: "white",
          padding: "20px 10px", // Padding for better spacing
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            maxWidth: "1200px",
            padding: "0 10px", // Padding for mobile view
          }}
        >
          {/* About Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We offer high-quality printing services tailored to meet all your
              business and personal needs. From calendars to packaging
              solutions, we've got you covered!
            </Typography>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/products" color="inherit" underline="hover">
                Products
              </Link>
              <Link
                onClick={() => navigateTo("/about-us")}
                color="inherit"
                underline="hover"
                style={{ cursor: "pointer" }}
              >
                About Us
              </Link>
              <Link
                onClick={() => navigateTo("/contact-us")}
                color="inherit"
                underline="hover"
                style={{ cursor: "pointer" }}
              >
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Policies Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Policies
            </Typography>
            <Box>
              <Link
                onClick={() => navigateTo("/terms-policy")}
                color="inherit"
                underline="hover"
                style={{ cursor: "pointer" }}
              >
                Terms & Policy
              </Link>
              <br />
              <Link
                onClick={() => navigateTo("/privacy-policy")}
                color="inherit"
                underline="hover"
                style={{ cursor: "pointer" }}
              >
                Privacy Policy
              </Link>
              <br />
              <Link
                onClick={() => navigateTo("/return-policy")}
                color="inherit"
                underline="hover"
                style={{ cursor: "pointer" }}
              >
                Return Policy
              </Link>
              <br />
              <Link
                onClick={() => navigateTo("/support-policy")}
                color="inherit"
                underline="hover"
                style={{ cursor: "pointer" }}
              >
                Support Policy
              </Link>
            </Box>
            {/* Scroll to Top Button */}
            <Box
              onClick={scrollToTop}
              sx={{
                marginTop: "10px",
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "8px",
                cursor: "pointer",
                display: "inline-block",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                },
              }}
            >
              <ArrowUpwardIcon sx={{ color: "#000000" }} />
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">Phone: +91 9811873015</Typography>
            <Typography variant="body2">Email: wraptee3@gmail.com</Typography>
            <Typography variant="body2">
              B-198, Himgiri Apartment, Kalkaji Extension, New Delhi 110019
            </Typography>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            textAlign: "center",
            padding: "10px 0",
            marginTop: "20px",
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} WrapTee. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
