import React, { createContext, useState, useContext } from "react";

// Create the context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  // State for cart
  const [cart, setCart] = useState([]);
  // State for user authentication and phone number
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState(null); // Store phone number in context

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.sku === product.sku);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.sku === product.sku
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (sku) => {
    setCart(cart.filter((item) => item.sku !== sku));
  };

  // Update product quantity in cart
  const updateQuantity = (sku, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.sku === sku ? { ...item, quantity } : item
      )
    );
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total cart quantity
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total cart price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Login user with phone number
  const loginUser = (userDetails, phoneNumber) => {
    setUser(userDetails); // Save user details (e.g., from Google login)
    setPhone(phoneNumber); // Store phone number
  };

  // Logout user
  const logoutUser = () => {
    setUser(null); // Clear user data
    setPhone(null); // Clear phone number
    clearCart(); // Optionally clear the cart when the user logs out
  };

  // Context value to share
  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity, // Expose updateQuantity function
    clearCart,
    getTotalQuantity,
    getTotalPrice,
    user,
    phone, // Expose phone number to context
    loginUser,
    logoutUser,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};
