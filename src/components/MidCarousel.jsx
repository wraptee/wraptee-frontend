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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
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
        width: "100%",
        height: { xs: "40vh", sm: "50vh", md: "60vh" }, // Responsive height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        overflow: "hidden",
      }}
    >
      <Slider {...settings} style={{ width: "100%" }}>
        {slides.map((slide) => (
          <Box
            key={slide.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0, // Remove padding
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                  objectFit: "cover", // Ensure it fills the container without stretching
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
