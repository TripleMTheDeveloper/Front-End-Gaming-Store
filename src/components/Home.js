import React from 'react';
import './Home.css';
import {Figure, Button} from 'react-bootstrap';

function Home() {
  return (
    <div className='home-container'>
        <div>
         <Button href="/products" variant="dark" size="lg">Start Shopping</Button>
        </div> 
    </div>
  )
}

export default Home;
