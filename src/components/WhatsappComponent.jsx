import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton } from "@mui/material";

const WhatsAppButton = () => {
  const companyPhoneNumber = "9811873015"; // Your company number
  const message = "Hello! WrapTree how are you"; // Custom message you want to send

  // URL format for WhatsApp chat
  const whatsappUrl = `https://wa.me/${companyPhoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <IconButton
      style={{
        position: "fixed",
        bottom: 20, // Adjust the distance from the bottom
        right: 20, // Adjust the distance from the right
        backgroundColor: "green", // Background color of the icon
        color: "white", // Icon color
        borderRadius: "50%", // Round the icon
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add some shadow for better visibility
      }}
      onClick={() => window.open(whatsappUrl, "_blank")} // Open WhatsApp in a new tab
    >
      <WhatsAppIcon style={{ fontSize: 40 }} /> {/* WhatsApp Icon */}
    </IconButton>
  );
};

export default WhatsAppButton;
