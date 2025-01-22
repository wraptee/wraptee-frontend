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
                sx={{
                  height: 200, // Fixed height for image container
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Maintains aspect ratio and fills the container
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  textAlign: "center",
                  padding: 2,
                  flexGrow: 1, // Makes the card content fill the remaining space
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
