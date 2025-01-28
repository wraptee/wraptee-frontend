import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  // Initialize cart state from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return [];
    }
  });

  // Initialize user and phone state from localStorage
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      return null;
    }
  });

  const [phone, setPhone] = useState(() => {
    try {
      const savedPhone = localStorage.getItem("phone");
      return savedPhone || null;
    } catch (error) {
      console.error("Error retrieving phone from localStorage:", error);
      return null;
    }
  });

  // Function to add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.sku === product.sku);
    let updatedCart;
    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.sku === product.sku
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to remove product from cart
  const removeFromCart = (sku) => {
    const updatedCart = cart.filter((item) => item.sku !== sku);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to update product quantity in cart
  const updateQuantity = (sku, quantity) => {
    const updatedCart = cart.map((item) =>
      item.sku === sku ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Calculate total quantity in the cart
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total price of items in the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to log in a user and store data in localStorage
  const loginUser = (userDetails, phoneNumber) => {
    setUser(userDetails);
    setPhone(phoneNumber);
    localStorage.setItem("user", JSON.stringify(userDetails));
    if (phoneNumber) {
      localStorage.setItem("phone", phoneNumber);
    }
  };

  // Function to log out a user and clear stored data
  const logoutUser = () => {
    setUser(null);
    setPhone(null);
    clearCart();
    localStorage.removeItem("user");
    localStorage.removeItem("phone");
  };

  // Effect to synchronize cart state with localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cart]);

  // Effect to synchronize user state with localStorage
  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.error("Error saving user to localStorage:", error);
    }
  }, [user]);

  // Effect to synchronize phone state with localStorage
  useEffect(() => {
    try {
      if (phone) {
        localStorage.setItem("phone", phone);
      } else {
        localStorage.removeItem("phone");
      }
    } catch (error) {
      console.error("Error saving phone to localStorage:", error);
    }
  }, [phone]);

  // Context value to share
  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalQuantity,
    getTotalPrice,
    user,
    phone,
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
