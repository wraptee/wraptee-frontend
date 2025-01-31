import React from "react";
import Section from "../components/Section";
import Carousel from "../components/Carousel";
import "../styles/home.css";
import { Box, Typography } from "@mui/material";
import MidCarousel from "../components/MidCarousel";
import ImageLinks from "../utils/imageLink";

const HomePage = () => {
  const items = [
    { name: "Tshirt", image: ImageLinks.tshirts },
    { name: "Cup", image: ImageLinks.mug },
    { name: "Coaster", image: ImageLinks.coaster },
    { name: "Sipper", image: ImageLinks.sippers },
    { name: "Pen", image: ImageLinks.pen },
    { name: "Caps", image: ImageLinks.caps },
    { name: "Watches", image: ImageLinks.clock },
    { name: "Diaries", image: ImageLinks.diary },
  ];

  return (
    <div className="homepage">
      <MidCarousel />

      <Box className="home-container">
        <Carousel />
      </Box>
      <Box className="home-container" mt={4}>
        <Section
          title="Popular Products"
          items={items}
          itemImagePath="assets/images"
        />
      </Box>
    </div>
  );
};

export default HomePage;
