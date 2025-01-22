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
