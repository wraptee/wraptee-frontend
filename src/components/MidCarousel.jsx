import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../assets/images/section/sliderBanner/banner.webp";
import banner1 from "../assets/images/section/sliderBanner/banner1.webp";
import banner2 from "../assets/images/section/sliderBanner/banner2.webp";

const MidCarousel = () => {
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time per slide
    arrows: false, // Hide navigation arrows
  };

  const slides = [
    {
      id: 1,
      title: "New Arrivals",
      description: "Check out our latest products!",
      image: banner,
    },
    {
      id: 2,
      title: "Hot Deals",
      description: "Don't miss out on amazing discounts!",
      image: banner1,
    },
    {
      id: 3,
      title: "Trending Now",
      description: "Discover the most popular items!",
      image: banner2,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%", // Full width
        height: "60vh", // 50% of the viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        overflow: "hidden", // Prevent overflow
      }}
    >
      <Slider {...settings} style={{ width: "90%", marginLeft: 0 }}>
        {slides.map((slide) => (
          <Box
            key={slide.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default MidCarousel;
