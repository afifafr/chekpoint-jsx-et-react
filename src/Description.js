import React from "react";
import product from "./product";

// Define the Description component
const Description = () => {
  return <p>{product.description}</p>; // Render the description property of the product object
};

export default Description; // Export the Description component as the default export