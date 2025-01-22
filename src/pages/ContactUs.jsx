import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Mail, Message, Person, Phone } from "@mui/icons-material";

const ContactUs = () => {
  return (
    <Container sx={{ mt: 5, maxWidth: "sm", width: "50%" }}>
      <Typography
        variant="h4"
        gutterBottom
        fontWeight={600}
        color="optional"
        textAlign={"center"}
      >
        Contact Us
      </Typography>
      <TextField
        fullWidth
        label="Name"
        margin="normal"
        placeholder="Please Enter You Name"
        color="optional"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Person sx={{ color: "#ff6347" }} />{" "}
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        placeholder="Please Enter your Email Id "
        color="optional"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Mail sx={{ color: "#ff6347" }} />{" "}
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Phone Number"
        type="number"
        placeholder="Enter Phone Number"
        size="10"
        margin="normal"
        color="optional"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Phone sx={{ color: "#ff6347" }} />{" "}
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Message"
        margin="normal"
        placeholder="Let us know what can we help you with!!"
        multiline
        rows={4}
        color="optional"
      />
      <div style={{ textAlign: "center" }}>
        <Button
          fullWidth
          variant="contained"
          color="optional"
          sx={{ mt: 2, mb: 2, width: "50%", color: "white" }}
        >
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default ContactUs;
