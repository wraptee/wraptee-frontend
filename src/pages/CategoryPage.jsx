import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import "../styles/category.css";
import productData from "../utils/product";

const CategoryPage = () => {
  const { categoryName, searchQuery } = useParams();
  const navigate = useNavigate();

  // Filter logic
  let filteredProducts = [];
  if (searchQuery) {
    const lowerQuery = searchQuery.toLowerCase();
    const matchingProduct = productData.find((product) =>
      product.name.toLowerCase().includes(lowerQuery)
    );
    if (matchingProduct) {
      filteredProducts = productData.filter(
        (product) =>
          product.category.toLowerCase() ===
          matchingProduct.category.toLowerCase()
      );
    } else {
      filteredProducts = productData.filter((product) =>
        product.category.toLowerCase().includes(lowerQuery)
      );
    }
  } else {
    filteredProducts = productData.filter(
      (product) => product.category.toLowerCase() === categoryName.toLowerCase()
    );
  }

  return (
    <div className="category-container">
      <Typography
        variant="h4"
        color="optional"
        className="category-title"
        mb={4}
      >
        {searchQuery
          ? `Search Results for "${searchQuery}"`
          : `Category: ${categoryName}`}
      </Typography>
      {filteredProducts.length === 0 ? (
        <Typography variant="h6" className="category-description">
          No products found.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.sku}>
              <Card
                className="category-card"
                onClick={() => navigate(`/product/${product.sku}`)}
              >
                <div className="category-image-container">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="category-image"
                  />
                </div>
                <CardContent>
                  <Typography variant="h6" color="optional" fontWeight={600}>
                    {product.name}
                  </Typography>
                  {/* <Typography color="optional" variant="body2">
                    {product.description}
                  </Typography> */}
                  <Typography color="optional" variant="body1">
                    ₹{product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CategoryPage;
