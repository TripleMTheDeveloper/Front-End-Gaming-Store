import React, { useContext, useState } from 'react';
import { CartContext } from './Cart';
import { Card, Figure, Modal, Button } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css';

const Checkout = ({ onPaymentSuccess, onBack }) => {
  // Access cart context values and methods
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  // Local state to manage loading state, shipping options, and modal visibility
  const [isLoading, setIsLoading] = useState(false);
  const [shippingOption, setShippingOption] = useState('standard');
  const [shippingCost, setShippingCost] = useState(50);
  const [showModal, setShowModal] = useState(false);

  // Handle the payment process
  const handlePayment = () => {
    setIsLoading(true);
    // Simulate payment processing delay
    setTimeout(() => {
      alert('Payment successful!');
      setIsLoading(false);
      clearCart(); // Clear the cart after successful payment
      onPaymentSuccess(); // Notify parent component of successful payment
    }, 2000);
  };

  // Update shipping cost based on the selected option
  const handleShippingChange = (event) => {
    const option = event.target.value;
    setShippingOption(option);

    if (option === 'express') {
      setShippingCost(100); // Assume express shipping costs 100
    } else {
      setShippingCost(50); // Standard shipping cost
    }
  };

  // Calculate the total price including shipping cost
  const calculateTotalWithShipping = () => {
    return totalPrice + shippingCost;
  };

  // Functions to handle modal visibility
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div className='checkout-container'>
      <h1>Cart Items</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Card className='checkout-card'>
          <Card.Body>
            <ul className='no-bullets'>
              {cart.map((product, index) => (
                <li key={index} className='checkout-item'>
                  <div className='product-info'>
                    <Figure>
                      <Figure.Image
                        src={product.image}
                        alt={product.name}
                        className='figure-img1 img-fluid1 product-image1'
                      />
                    </Figure>
                    <div>
                      {product.name} - R{product.price.toFixed(2)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <Card.Text>Total Price: R{totalPrice.toFixed(2)}</Card.Text>
            <Card.Text>Shipping Cost: R{shippingCost.toFixed(2)}</Card.Text>
            <Card.Text>Total with Shipping: R{calculateTotalWithShipping().toFixed(2)}</Card.Text>
            <div className='form-control1'>
              <label htmlFor="shipping" className='shipping-input'>
                Choose a shipping option:
                <FaInfoCircle className='info-icon' onClick={handleShowModal} />
              </label>
              <select id="shipping" value={shippingOption} onChange={handleShippingChange}>
                <option value="standard">Standard Shipping - R50.00</option>
                <option value="express">Express Shipping - R100.00</option>
              </select>
            </div>
            <div className='pay-buttons'>
              <button onClick={handlePayment}>Pay Now</button>
              <button onClick={onBack}>Back to Products</button>
            </div>
          </Card.Body>
        </Card>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Choose a shipping option that suits you best:
          </p>
          <ul>
            <li>Standard Shipping: Costs R50 and takes 5-7 business days.</li>
            <li>Express Shipping: Costs R100 and takes 1-3 business days.</li>
          </ul>
          <p>
            If you still feel unsure, contact us at 012 345 6789 or email us at marcusmdlalo252@gmail.com
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Checkout;











