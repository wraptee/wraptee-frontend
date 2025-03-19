import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "../styles/footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const [showScroll, setShowScroll] = useState(false);

  const navigateTo = (path) => {
    navigate(path);
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to toggle the visibility of the scroll-to-top button
  const handleScroll = () => {
    const scrollY =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    if (scrollY > 300) {
      setShowScroll(true); // Show button
    } else {
      setShowScroll(false); // Hide button
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed-footer">
      <Box
        sx={{
          backgroundColor: "#000000",
          color: "white",
          padding: "20px 10px",
          width: "100%", // Ensure footer takes up the full width
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            maxWidth: "1200px",
            padding: "0 10px",
            margin: "0 auto",
          }}
        >
          {/* About Section */}
          {/* <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We offer high-quality printing services tailored to meet all your
              business and personal needs. From calendars to packaging
              solutions, we've got you covered!
            </Typography>
          </Grid> */}

          {/* Links Section */}
          <Grid item xs={12} sm={6} md={3}>
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
          <Grid item xs={12} sm={6} md={3}>
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
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Phone: +91 9811873015, 9205253927
            </Typography>
            <Typography variant="body2">Email: wraptee3@gmail.com</Typography>
            <Typography variant="body2">
              B-98, Himgiri Apartment, Kalkaji <br></br> Extension, New Delhi
              110019
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

      {/* Scroll to Top Button */}
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <ArrowUpwardIcon />
        </div>
      )}
    </div>
  );
};

export default Footer;
