// Import the necessary libraries
const BASE_URL = 'https://wraptee-backend.vercel.app/api'; // Replace with your actual backend URL

// Function to send email and phone number to the backend
export const sendUserInfoToBackend = async (email, phoneNumber) => {
  try {
    const response = await fetch(`${BASE_URL}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        phoneNumber,
      }),
    });

    const data = await response.json();
    if (data.success) {
      return { success: true };
    } else {
      return { success: false, message: 'Failed to send your information' };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send your information' };
  }
};

// Function to send order details to the backend
export const sendOrderToBackend = async (orderDetails) => {
  try {
    // Extract the details from the order
    const { name, email, phoneNumber, cart } = orderDetails;

    // Prepare the request payload
    const payload = {
      name,
      email,
      phoneNumber,
      cart: cart.map((product) => ({
        name: product.name,
        sku: product.sku,
        price: product.price,
        quantity: product.quantity,
        category: product.category,
        description: product.description,
        imageUrl: product.imageUrl, // Send image URL if needed
      })),
    };

    // Send the payload as JSON
    const response = await fetch(`${BASE_URL}/send-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload), // Send the payload as JSON
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, message: 'Order placed successfully' };
    } else {
      return { success: false, message: data.message || 'Failed to place order' };
    }
  } catch (error) {
    console.error('Error placing order:', error);
    return { success: false, message: 'Failed to place order' };
  }
};


// Function to send contact query to backend
export const sendQueryToBackend = async (name, email, phoneNumber, message) => {
  try {
    const response = await fetch(`${BASE_URL}/contact-us`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        message: message
      }),
    });

    const data = await response.json();
    if (response.ok) {
      return { success: true, message: 'Query sent successfully' };
    } else {
      return { success: false, message: data.message || 'Failed to send query' };
    }
  } catch (error) {
    console.error('Error sending query:', error);
    return { success: false, message: 'Failed to send query' };
  }
};
