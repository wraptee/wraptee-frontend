import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "../styles/carousel.css"; // Custom styles for carousel
import productData from "../utils/product";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  const settings = {
    dots: false, // Show dots for navigation
    infinite: true, // Infinite looping of slides
    speed: 500, // Slide transition speed
    slidesToShow: 4, // Show 4 slides at a time for large screens
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Change slides every 3 seconds
    centerMode: true, // Center the active slide
    focusOnSelect: true, // Focus on selected slide
    responsive: [
      {
        breakpoint: 1200, // Adjust for medium screens
        settings: {
          slidesToShow: 3, // Show 3 slides at a time
        },
      },
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on smaller screens
        },
      },
    ],
  };

  const onHandleProductDetail = (sku) => {};

  return (
    <Box className="carousel-container">
      <Typography
        className="carousel-title"
        variant="h4"
        gutterBottom
        mt={2}
        fontWeight={600}
      >
        New Highlights & Hot Products
      </Typography>
      <Slider {...settings}>
        {productData.map((slide) => (
          <div
            key={slide.sku}
            onClick={() => navigate(`/product/${slide.sku}`)}
          >
            <Box className="carousel-slide">
              <img
                src={slide.imageUrl}
                alt={slide.author}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                  gap: 10,
                }}
              />
              <Typography variant="h6" sx={{ marginTop: 1 }} color="optional">
                {slide.name}
              </Typography>
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
