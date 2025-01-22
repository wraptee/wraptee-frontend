// components/CustomizationPanel.jsx
import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const CustomizationPanel = ({ onCustomize }) => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#000000");

  const handleSubmit = () => {
    onCustomize({ text, color });
  };

  return (
    <Box>
      <TextField
        label="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        type="color"
        label="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Apply
      </Button>
    </Box>
  );
};

export default CustomizationPanel;
