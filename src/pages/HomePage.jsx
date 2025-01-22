import React from "react";
import Section from "../components/Section";
import Carousel from "../components/Carousel";
import "../styles/home.css";
import { Box, Typography } from "@mui/material";
import MidCarousel from "../components/MidCarousel";
import ImageLinks from "../utils/imageLink";

const HomePage = () => {
  const items = [
    { name: "Calendar and Diaries", image: ImageLinks.apparel },
    { name: "Coaster", image: ImageLinks.business },
    { name: "Photo Gift", image: ImageLinks.photo },
    { name: "Packaging and Solution", image: ImageLinks.business },
    { name: "Calendar and Diaries", image: ImageLinks.corporate },
    { name: "Apparel", image: ImageLinks.label },
    { name: "Photo Gift", image: ImageLinks.stationary },
    { name: "Packaging and Solution", image: ImageLinks.sticker },
  ];

  return (
    <div className="homepage">
      <MidCarousel />

      <Box className="home-container">
        <Carousel />
      </Box>

      {/* Added margin-top for spacing between carousel and section */}
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
