import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "../styles/carousel.css"; // Custom styles for carousel
import productData from "../utils/product";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200, // Medium devices (tablets)
        settings: {
          slidesToShow: 3, // Show 3 slides at a time
        },
      },
      {
        breakpoint: 768, // Smaller screens (mobile)
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on small screens
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
        Hot Products
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
                className="carousel-image"
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
