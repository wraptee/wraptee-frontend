import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "../styles/carousel.css"; // Custom styles for carousel
import productData from "../utils/product";
import { useNavigate } from "react-router-dom";

// Helper function to group products by category
const groupByCategory = (products) => {
  const grouped = {};
  products.forEach((product) => {
    if (!grouped[product.category]) {
      grouped[product.category] = [];
    }
    grouped[product.category].push(product);
  });
  return grouped;
};

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

  // Group products by category
  const groupedProducts = groupByCategory(productData);

  // Create an array of one product per category
  const filteredProducts = Object.values(groupedProducts).map(
    (categoryProducts) => categoryProducts[0] // Take the first product from each category
  );

  return (
    <Box className="carousel-container">
      <Typography
        className="carousel-title"
        variant="h4"
        gutterBottom
        color="optional"
        mt={5}
        fontWeight={600}
        textAlign={"center"}
        mb={5}
      >
        Hot Products
      </Typography>
      <Slider {...settings}>
        {filteredProducts.map((slide) => (
          <div
            key={slide.sku}
            onClick={() => navigate(`/product/${slide.sku}`)}
          >
            <Box className="carousel-slide">
              <Box className="carousel-image-container">
                <img
                  src={slide.imageUrl}
                  alt={slide.name}
                  className="carousel-image"
                />
              </Box>
              <Typography
                variant="h6"
                className="carousel-item-title"
                color="optional"
              >
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
