import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail"; // Import Mail icon
import { useNavigate } from "react-router-dom";
import { useCart } from "../store/cartContext"; // Import CartContext to use loginUser
import { auth } from "../services/firebase"; // Import the auth instance from firebase.js
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"; // Import necessary methods from Firebase
import { sendUserInfoToBackend } from "../services/authService"; // Import the new API service

const LoginPage = () => {
  const [user, setUser] = useState(null); // Local user state
  const [email, setEmail] = useState(""); // State for email input
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number
  const [error, setError] = useState(""); // Error state for handling errors
  const [isPhoneNumberEntered, setIsPhoneNumberEntered] = useState(false); // State to track if the phone number is entered
  const [phoneError, setPhoneError] = useState(""); // State for phone number validation error
  const [isSubmitClicked, setIsSubmitClicked] = useState(false); // State to track if the submit button is clicked
  const navigate = useNavigate();

  // Access loginUser function from CartContext
  const { loginUser } = useCart();

  // Function to validate the phone number (Indian phone number validation)
  const validatePhoneNumber = (number) => {
    const phonePattern = /^[789]\d{9}$/; // Indian phone number regex: 10 digits starting with 7, 8, or 9
    return phonePattern.test(number);
  };

  // Google login handler
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // Initialize Google Auth provider
    try {
      const result = await signInWithPopup(auth, provider); // Use signInWithPopup for Google login
      const user = result.user;
      setUser(user);
      // After Google login, store user details in the context
      loginUser({ name: user.displayName, email: user.email, phoneNumber });
      navigate("/"); // Navigate to the home page after successful login
    } catch (error) {
      console.error(error);
      setError("Failed to log in with Google");
    }
  };

  // Logout handler
  const handleLogout = () => {
    signOut(auth) // Sign out from Firebase
      .then(() => {
        loginUser(null, null); // Clear user data in context
        setUser(null); // Clear local user state
        navigate("/"); // Redirect to home page after logout
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to log out");
      });
  };

  // Handle phone number input change and validate
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setIsPhoneNumberEntered(value.length > 0);

    // Validate phone number
    if (value.length > 0 && !validatePhoneNumber(value)) {
      setPhoneError("Please enter a valid Indian phone number");
    } else {
      setPhoneError(""); // Clear error if the number is valid
    }
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Set email value in state
  };

  // Handle submit button click
  const handleSubmit = async () => {
    setIsSubmitClicked(true); // Hide submit button and show Google login button

    // Send the user's email and phone number to the backend
    const { success, message } = await sendUserInfoToBackend(
      email,
      phoneNumber
    );

    if (success) {
      alert("Your information has been sent successfully!");
    } else {
      setError(message);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop={5}
      sx={{ width: "100%", maxWidth: 400, marginX: "auto" }} // Apply custom width for better layout
    >
      <Typography color="optional" variant="h4" mb={4}>
        Welcome to WrapTee !!
      </Typography>
      {!user ? (
        <>
          {/* Email input with Mail Icon */}
          <TextField
            label="Email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            style={{ marginBottom: "20px" }}
            placeholder="Enter your email"
            type="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon sx={{ color: "#ff6347" }} />{" "}
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#ff6347", // Orange border on focus
                },
            }}
          />

          {/* Phone number input */}
          {!isSubmitClicked && (
            <TextField
              label="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              fullWidth
              style={{ marginBottom: "20px" }}
              placeholder="Enter your phone number"
              error={!!phoneError} // Show error if phoneError exists
              helperText={phoneError} // Display error message
              inputProps={{ maxLength: 10 }} // Limit the input length to 10
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon sx={{ color: "#ff6347" }} />{" "}
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#ff6347", // Orange border on focus
                  },
              }}
            />
          )}

          {/* Submit Button */}
          {!isSubmitClicked && isPhoneNumberEntered && !phoneError && email && (
            <Button
              variant="contained"
              color="optional"
              onClick={handleSubmit} // Handle submit button click
              style={{ marginBottom: "20px", color: "white" }}
            >
              Submit
            </Button>
          )}

          {/* Once Submit is clicked, hide it and show Google Login */}
          {isSubmitClicked && (
            <Button
              variant="contained"
              color="optional"
              onClick={handleGoogleLogin}
              style={{ marginBottom: "20px", color: "white" }}
            >
              Login with Google
            </Button>
          )}
        </>
      ) : (
        <>
          <Typography variant="h6">Welcome, {user.displayName}</Typography>
          <Button
            variant="contained"
            color="optional"
            sx={{ color: "white" }}
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </>
      )}

      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};

export default LoginPage;
