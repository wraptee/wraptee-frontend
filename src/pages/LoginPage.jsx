import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  InputAdornment,
  Modal,
  Paper,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import GoogleIcon from "@mui/icons-material/Google";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useCart } from "../store/cartContext";
import { auth } from "../services/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { sendUserInfoToBackend } from "../services/authService";
import ImageLinks from "../utils/imageLink";

// Google colors for Google login button
const googleColors = {
  blue: "#4285F4",
  green: "#0F9D58",
  yellow: "#F4B400",
  red: "#DB4437",
};

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isPhoneNumberEntered, setIsPhoneNumberEntered] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const { loginUser } = useCart();

  const validatePhoneNumber = (number) => {
    const phonePattern = /^[789]\d{9}$/;
    return phonePattern.test(number);
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      loginUser({ name: user.displayName, email: user.email }, phoneNumber); // Persist user details and phone
      setEmail(user.email);
      setOpenModal(true);
    } catch (error) {
      console.error(error);
      setError("Failed to log in with Google");
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        loginUser(null, null);
        setUser(null);
        setOpenModal(false);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to log out");
      });
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setIsPhoneNumberEntered(value.length > 0);
    if (value.length > 0 && !validatePhoneNumber(value)) {
      setPhoneError("Please enter a valid Indian phone number");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = async () => {
    const { success, message } = await sendUserInfoToBackend(
      email,
      phoneNumber
    );
    loginUser({ name: user.displayName, email: user.email, phoneNumber });
    if (success) {
      alert("Your information has been sent successfully!");
      setOpenModal(false);
    } else {
      setError(message);
    }
    navigate("/");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        height: "100vh", // Ensure full viewport height
        backgroundColor: "#f5f5f5", // Subtle background color
        paddingX: { xs: 2, sm: 3 },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: "100%",
          maxWidth: 600, // Card width
          minHeight: 500, // Increased height
          backgroundColor: "black", // Card background
          borderRadius: 8, // Rounded corners
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
          padding: 4, // Padding inside the card
        }}
      >
        <Typography variant="h4" color="optional" fontWeight={600} mt={4}>
          Welcome to{" "}
        </Typography>
        {/* Replace text with WrapTee logo */}
        <img
          src={ImageLinks.logo} // Provide the path to your logo image
          alt="WrapTee Logo"
          style={{
            width: "200px",
            height: "auto",
            marginBottom: "20px",
          }}
        />

        {/* Google Icon with Google colors */}
        <GoogleIcon
          sx={{
            fontSize: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 3,
            background: `linear-gradient(45deg, ${googleColors.blue} 33%, ${googleColors.green} 33%, ${googleColors.yellow} 33%, ${googleColors.red} 33%)`,
            borderRadius: "50%",
            padding: "8px",
          }}
        />

        {!user ? (
          <>
            <Button
              variant="contained"
              color="optional"
              onClick={handleGoogleLogin}
              style={{ marginBottom: "20px", color: "white" }}
              fullWidth
            >
              Login with Google
            </Button>
          </>
        ) : (
          <>
            {user && (
              <>
                <Typography variant="h6">{`Welcome, ${user.displayName}`}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ color: "white" }}
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
              </>
            )}
          </>
        )}

        {error && <Typography color="error">{error}</Typography>}

        {/* Modal with phone number and email */}
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <Paper
              sx={{
                padding: 3,
                width: { xs: "80%", sm: 400 },
                maxWidth: 600,
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <IconButton
                  sx={{ position: "absolute", top: 10, right: 10 }}
                  onClick={() => setOpenModal(false)}
                >
                  <CloseIcon />
                </IconButton>
                <Typography color="#ff6347" variant="h6" mb={2}>
                  {`Hello, ${user ? user.displayName : ""}`}
                </Typography>
                <TextField
                  label="Email"
                  value={email}
                  fullWidth
                  disabled
                  style={{ marginBottom: "20px" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon sx={{ color: "#ff6347" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Phone Number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  fullWidth
                  color="optional"
                  style={{ marginBottom: "20px" }}
                  error={!!phoneError}
                  helperText={phoneError}
                  inputProps={{ maxLength: 10 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon sx={{ color: "#ff6347" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                {isPhoneNumberEntered && !phoneError && (
                  <Button
                    variant="contained"
                    color="optional"
                    onClick={handleSubmit}
                    sx={{ marginTop: 2, color: "white" }}
                    fullWidth
                  >
                    Submit
                  </Button>
                )}
              </Box>
            </Paper>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default LoginPage;
