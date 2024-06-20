import React from 'react';
import './About.css';
import Logo from './images/Untitled Design(5).png';
import TrxpleM from './images/TrxpleM.jpg';
import Art from './images/Art.jpg';
import Product from './images/Product.png';
import { Figure } from 'react-bootstrap';

function About() {
  return (
    <div className='about-container'>
      <section id="about-us">
      <Figure>
              <Figure.Image
              src={Logo}
              alt={Logo}
              className="figure-img img-fluid product-image"
              />
      </Figure>
      <h1>About Us</h1>
      <p>
        Welcome to TripleM! At TripleM, we are passionate about bringing the best digital games to gamers around the world. Our mission is to provide a seamless, enjoyable, and secure shopping experience for all your gaming needs. Whether you’re a casual gamer or a hardcore enthusiast, we have something for everyone.
      </p>

      <Figure>
              <Figure.Image
              src={TrxpleM}
              alt={TrxpleM}
              className="my-image2"
              />
      </Figure>

      <h2>Our Story</h2>
      <p>
        TripleM was founded by Marcus Mdlalo, a 25-year-old gaming enthusiast and Esports lover. With a deep passion for gaming and a particular addiction to Football Manager, Marcus decided to create a platform where fellow gamers could easily find and enjoy their favorite digital games.
      </p>

      <Figure>
              <Figure.Image
              src={Art}
              alt={Art}
              className="my-image2"
              />
      </Figure>

      <h2>Our Vision</h2>
      <p>
        We envision a world where gaming is accessible to everyone, anywhere, anytime. Our store is designed to offer a wide range of digital games, from the latest releases to timeless classics, ensuring that every gamer can find their next adventure.
      </p>

      <Figure>
              <Figure.Image
              src={Product}
              alt={Product}
              className="my-image2"
              />
      </Figure>

      <h2>What We Offer</h2>
      <p>
        At TripleM, we offer a wide selection of digital games across multiple genres and platforms. We prioritize secure transactions and instant delivery, so you can start playing right away. Our dedicated customer support team is always ready to assist you with any questions or issues you may have.
      </p>

      <p>
        Customer satisfaction is our top priority. We are committed to providing high-quality products, excellent customer service, and a user-friendly shopping experience. Your feedback is valuable to us as we continuously strive to improve and meet your gaming needs.
      </p>

      <p>
        Become a part of the TripleM community and embark on your next gaming adventure. Follow us on social media for the latest updates, promotions, and game releases. Thank you for choosing TripleM – your ultimate destination for digital games.
      </p>
    </section>
    </div>
  )
}

export default About
