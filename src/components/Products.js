import React, { useContext, useState } from 'react';
import { Card, Button, Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';
import { CartContext, TotalPrice } from './Cart';
import FMCover from './images/FM24PC.jpeg';
import FMCover2 from './images/FM24Console.jpeg';
import EAFCCover2 from './images/EAFC2.jpeg';
import EAFCCover from './images/EAFC.jpeg';
import F1Cover from './images/F1Cover.jpeg';
import F1Cover2 from './images/F1Cover2.jpeg';
import NBA from './images/2k24Cover.jpeg';
import WWE from './images/WWECover.jpeg';
import MKCover from './images/MKCover.jpg';
import SFCover from './images/SFCover.jpeg';
import GuiltyGear from './images/GuiltyGear.jpeg';
import DBZCover from './images/DBZCover.jpeg';
import Checkout from './Checkout';

function Products() {
  // Get the addToCart function from the CartContext using useContext hook
  const { addToCart } = useContext(CartContext);

  // State to manage the visibility of the Checkout component
  const [showCheckout, setShowCheckout] = useState(false);

  // Array of product data containing name, description, price, and image for each product
  const productData = [
    { name: "Football Manager 24", description: "football simulator", price: 649, image: FMCover },
    { name: "Football Manager 24 ", description: "football simulator", price: 599, image: FMCover2 },
    { name: "EA FC 24 LIMITED EDITION", description: "football game", price: 1499, image: EAFCCover2 },
    { name: "EA FC 24", description: "The world's leading football game", price: 1000, image: EAFCCover },
    { name: "F1 24", description: "Racing game", price: 625, image: F1Cover },
    { name: "F1 Manager", description: "Racing simulator", price: 625, image: F1Cover2 },
    { name: "NBA 2k24", description: "In honour of the mamber", price: 1000, image: NBA },
    { name: "WWE 2k24", description: "Wresting entertainment simulator", price: 1250, image: WWE },
    { name: "Mortal Kombat", description: "Wresting entertainment simulator", price: 1250, image: MKCover },
    { name: "Street Fighter", description: "Wresting entertainment simulator", price: 1150, image: SFCover },
    { name: "Guilty Gear Strive", description: "Wresting entertainment simulator", price: 1250, image: GuiltyGear },
    { name: "Dragon Ball Z Kakarot", description: "Wresting entertainment simulator", price: 799, image: DBZCover }
  ];

  // Function to show the Checkout component
  const handleCheckout = () => {
    setShowCheckout(true);
  };

  // Function to hide the Checkout component and go back to product listing
  const handleBackToProducts = () => {
    setShowCheckout(false);
  };

  // Function to handle payment success and hide the Checkout component
  const handlePaymentSuccess = () => {
    setShowCheckout(false); // Hide Checkout component after successful payment
  };

  return (
    <div className='container-product'>
      {showCheckout ? (
        // Show the Checkout component if showCheckout state is true
        <Checkout onPaymentSuccess={handlePaymentSuccess} onBack={handleBackToProducts} />
      ) : (
        <>
          <h2>Products</h2>
          <div className="row no-gutters">
            {/* Map through the productData array and render a Card for each product */}
            {productData.map((product, index) => (
              <div key={index} className="col-6 col-md-3 mb-3">
                <Card className='product-card'>
                  <Figure>
                    <Figure.Image
                      src={product.image}
                      alt={product.name}
                      className="figure-img img-fluid product-image"
                    />
                  </Figure>
                  <Card.Body className='card-body' >
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>Price: R{product.price.toFixed(2)}</Card.Text>
                    {/* Button to add product to cart */}
                    <Button className='btn-custom' onClick={() => addToCart(product)}>Add to Cart</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          <div className='total-price'>
            {/* Component to display the total price */}
            <TotalPrice />
          </div>
          {/* Button to proceed to checkout */}
          <Button className='btn-custom1' onClick={handleCheckout}>Proceed to Checkout</Button>
        </>
      )}
    </div>
  );
}

export default Products;




