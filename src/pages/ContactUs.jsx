import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  InputAdornment,
  Grid,
} from "@mui/material";
import { Mail, Person, Phone } from "@mui/icons-material";
import { sendQueryToBackend } from "../services/authService";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    messageData: "",
  });
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const onHandleSubmit = async () => {
    setLoading(true);
    setFeedback("");

    try {
      const { success, message } = await sendQueryToBackend(
        formData.name,
        formData.email,
        formData.phoneNumber,
        formData.messageData
      );

      if (success) {
        setFeedback("Thank you for contacting us! We'll get back to you soon.");
        setFormData({ name: "", email: "", phoneNumber: "", messageData: "" }); // Reset form
        navigate("/");
      } else {
        setFeedback("Failed to send your message. Please try again.");
      }
    } catch (error) {
      setFeedback("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ mt: 5, px: 2 }}>
      <Typography
        variant="h4"
        gutterBottom
        fontWeight={600}
        color="optional"
        textAlign="center"
      >
        Contact Us
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            placeholder="Please Enter Your Name"
            color="optional"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person sx={{ color: "#ff6347" }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            placeholder="Please Enter Your Email"
            color="optional"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Mail sx={{ color: "#ff6347" }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            type="number"
            placeholder="Enter Phone Number"
            margin="normal"
            color="optional"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone sx={{ color: "#ff6347" }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message"
            name="messageData"
            value={formData.messageData}
            onChange={handleChange}
            margin="normal"
            placeholder="Let us know how we can help!"
            multiline
            rows={4}
            color="optional"
          />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="optional"
            sx={{
              mt: 2,
              mb: 2,
              px: 4,
              backgroundColor: "#ff6347",
              color: "white",
              width: { xs: "100%", sm: "50%" },
            }}
            onClick={onHandleSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </Grid>
        {feedback && (
          <Grid item xs={12}>
            <Typography
              textAlign="center"
              color={feedback.includes("Thank you") ? "success.main" : "error"}
            >
              {feedback}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default ContactUs;
