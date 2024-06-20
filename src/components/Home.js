import React from 'react';
import './Home.css';
import {Figure, Button} from 'react-bootstrap';
import Logo from './images/Untitled Design(5).png';
import Me from './images/IMG_20190904_232158_892.jpg';

function Home() {
  return (
    <div className='home-container'>
        <div>
            <Figure>
                <Figure.Image
                src={Logo}
                alt={Logo}
                className="figure-img img-fluid product-image"
                />
            </Figure>
            <h1>Welcome to TripleM</h1>
            <p>
                At TripleM, we believe in bringing the best digital gaming experiences right to your fingertips.
                Whether you're a seasoned gamer or just getting started, we've got something for everyone. Our store
                offers a wide range of digital games, including the latest releases and timeless classics.
            </p>
            <Figure>
                <Figure.Image
                src={Me}
                alt={Me}
                className="my-image"
                />
            </Figure>
            <p>
                TripleM was founded by Marcus Mdlalo, a passionate gamer and esports enthusiast from South Africa.
                At 25, Marcus is a big-time Football Manager addict and knows what gamers want. His love for gaming
                and deep understanding of the community drives our mission to provide top-notch games and excellent service.
            </p>
         <Button href="/products" variant="dark" size="lg">Start Shopping</Button>
        </div> 
    </div>
  )
}

export default Home;
