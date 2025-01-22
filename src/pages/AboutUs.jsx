import React from "react";
import { Container, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography>Add your company details here...</Typography>
    </Container>
  );
};

export default AboutUs;
