import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHeader from './images/GamingHeader.png';
import { Card, Button, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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


function Home() {
    const featuredData = [
    { name: "Mortal Kombat", description: "Wresting entertainment simulator", price: 1250, image: MKCover },
    { name: "Street Fighter", description: "Wresting entertainment simulator", price: 1150, image: SFCover },
    { name: "Guilty Gear Strive", description: "Wresting entertainment simulator", price: 1250, image: GuiltyGear },
    { name: "Dragon Ball Z Kakarot", description: "Wresting entertainment simulator", price: 799, image: DBZCover }
     ];

    const newData = [
      { name: "Football Manager 24", description: "football simulator", price: 649, image: FMCover },
      { name: "Football Manager 24 ", description: "football simulator", price: 599, image: FMCover2 },
      { name: "EA FC 24 LIMITED EDITION", description: "football game", price: 1499, image: EAFCCover2 },
      { name: "EA FC 24", description: "The world's leading football game", price: 1000, image: EAFCCover }
      ];

    const oldData = [
      { name: "F1 24", description: "Racing game", price: 625, image: F1Cover },
      { name: "F1 Manager", description: "Racing simulator", price: 625, image: F1Cover2 },
      { name: "NBA 2k24", description: "In honour of the mamber", price: 1000, image: NBA },
      { name: "WWE 2k24", description: "Wresting entertainment simulator", price: 1250, image: WWE }
      ];
  return (
    <div className='container'>
        <div>
          <img className='home-header' src={HomeHeader} alt='HomeHeader'/>
          <Link to="/products">
            <button className="shop-now-button">Shop Now</button>
          </Link>
          <hr></hr>
          <div className="row g-5">
            <h className="section-header">Featured</h>
            {/* Map through the productData array and render a Card for each product */}
            {featuredData.map((product, index) => (
              <div key={index} className="col-6 col-md-3 mb-3">
                <Card className='product-card'>
                  <Figure>
                    <Figure.Image
                      src={product.image}
                      alt={product.name}
                      className="figure-img img-fluid product-image"
                    />
                  </Figure>
                  <Card.Body className='card-body'>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Price: R{product.price.toFixed(2)}</Card.Text>
                    {/* Button to add product to cart */}
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>

          <hr></hr>
          <div className="row g-5">
            <h className="section-header">New Releases</h>
            {/* Map through the productData array and render a Card for each product */}
            {newData.map((product, index) => (
              <div key={index} className="col-6 col-md-3 mb-3">
                <Card className='product-card'>
                  <Figure>
                    <Figure.Image
                      src={product.image}
                      alt={product.name}
                      className="figure-img img-fluid product-image"
                    />
                  </Figure>
                  <Card.Body className='card-body'>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Price: R{product.price.toFixed(2)}</Card.Text>
                    {/* Button to add product to cart */}
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          <hr></hr>
          <div className="row g-5">
            <h className="section-header">On Special</h>
            {/* Map through the productData array and render a Card for each product */}
            {oldData.map((product, index) => (
              <div key={index} className="col-6 col-md-3 mb-3">
                <Card className='product-card'>
                  <Figure>
                    <Figure.Image
                      src={product.image}
                      alt={product.name}
                      className="figure-img img-fluid product-image"
                    />
                  </Figure>
                  <Card.Body className='card-body'>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Price: R{product.price.toFixed(2)}</Card.Text>
                    {/* Button to add product to cart */}
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div> 
    </div>
  )
}

export default Home;
