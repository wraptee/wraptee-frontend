import React from "react";
import { Container, Typography, Button } from "@mui/material";

const NotFound = () => {
  return (
    <Container sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h3" color="optional" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Button
        variant="contained"
        sx={{ color: "white" }}
        color="optional"
        href="/"
      >
        Go Back Home
      </Button>
    </Container>
  );
};

export default NotFound;
