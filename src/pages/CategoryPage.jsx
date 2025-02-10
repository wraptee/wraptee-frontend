import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import "../styles/category.css";
import productData from "../utils/product";

const CategoryPage = () => {
  const { categoryName, searchQuery } = useParams();
  const navigate = useNavigate();

  // Ensure searchQuery is a valid string before calling toLowerCase()
  const lowerQuery = searchQuery?.toLowerCase() || "";

  // Filter logic with safety checks
  let filteredProducts = [];
  if (lowerQuery) {
    const matchingProduct = productData.find(
      (product) => product.name?.toLowerCase().includes(lowerQuery) // Safe check
    );

    if (matchingProduct) {
      filteredProducts = productData.filter(
        (product) =>
          product.category?.toLowerCase() ===
          matchingProduct.category?.toLowerCase()
      );
    } else {
      filteredProducts = productData.filter((product) =>
        product.category?.toLowerCase().includes(lowerQuery)
      );
    }
  } else {
    filteredProducts = productData.filter(
      (product) =>
        product.category?.toLowerCase() === categoryName?.toLowerCase()
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
                    alt={product.name || "Product Image"} // Safe check
                    className="category-image"
                  />
                </div>
                <CardContent>
                  <Typography variant="h6" color="optional" fontWeight={600}>
                    {product.name || "Unnamed Product"} {/* Safe check */}
                  </Typography>
                  <Typography color="optional" variant="body1">
                    ₹{product.price || "N/A"}
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