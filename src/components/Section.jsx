import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/section.css";

const Section = ({ title, items }) => {
  const navigate = useNavigate();

  const handleItemClick = (itemName) => {
    navigate(`/category/${itemName}`);
  };

  return (
    <div className="section" style={{ marginTop: 20 }}>
      <Typography
        variant="h4"
        className="section-title"
        style={{
          marginBottom: 20,
          textAlign: "center",
          fontWeight: 600,
          marginTop: "4%",
        }}
      >
        {title}
      </Typography>
      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.name}>
            <Card
              className="section-card"
              onClick={() => handleItemClick(item.name)}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                className="section-card-image-container"
                sx={{
                  aspectRatio: "4/3", // Ensures consistent card image aspect ratio
                  width: "100%",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#f5f5f5", // Fallback background
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="section-card-image"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain", // Ensures the full image is visible
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  textAlign: "center",
                  padding: 2,
                  flexGrow: 1, // Ensures card content grows to fill available space
                }}
              >
                <Typography
                  variant="h6"
                  className="section-name"
                  sx={{ fontWeight: 600, color: "#ff6347" }}
                >
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Section;
