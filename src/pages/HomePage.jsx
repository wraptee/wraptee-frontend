import React from "react";
import Section from "../components/Section"; // Import the renamed component
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
    <div>
      <MidCarousel />
      <div>
        <Section title="" items={items} />
      </div>

      <Box className="home-container">
        <Carousel />
        <Section
          title="Popular Products"
          items={items}
          itemImagePath="assets/images"
        />
        <br></br>
        <Section
          title="Corporate Gifts"
          items={items}
          itemImagePath="assets/images"
        />
        <br></br>
        <Section
          title="Packaging Products"
          items={items}
          itemImagePath="assets/images"
        />
        <br></br>
        <Section
          title="Photo Gifts"
          items={items}
          itemImagePath="assets/images"
        />
      </Box>
    </div>
  );
};

export default HomePage;
