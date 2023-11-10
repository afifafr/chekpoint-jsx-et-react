import React from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import product from './product';
import { Card } from 'react-bootstrap';

// Define the main App component
const App = () => {
  const firstName = 'Tarek Tounekti'; // Define a firstName variable

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={product.image} alt="Product" /> {/* Display the product image */}
        <Card.Body>
          <Card.Title>
            <Name name={product.name} /> {/* Render the Name component with the product name */}
          </Card.Title>
          <Card.Text>
            <Price price={product.price} /> {/* Render the Price component with the product price */}
            <Description description={product.description} /> {/* Render the Description component with the product description */}
          </Card.Text>
        </Card.Body>
      </Card>
      <p>
        Hello, {firstName ? firstName : 'there'}! {/* Display a greeting message with the firstName variable */}
      </p>
    </div>
  );
};

export default App; // Export the App component as the default export