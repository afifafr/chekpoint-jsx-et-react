import React from "react";
import product from "./product";

// Define the Image component
const Image = () => {
  return <img src={product.image} alt="Product" />; // Render the image property of the product object
};

export default Image; // Export the Image component as the default export