import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHeader from './images/GamingHeader.png';
import HomeHeader2 from './images/GamingHeader3.jpg';
import { Card, Figure } from 'react-bootstrap';
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
import GamingProduct from './images/GamingProduct.jpg';
import GamingProduct2 from './images/GamingProduct2.png';
import GamingProduct3 from './images/GamingProduct3.jpg';
import GamingProduct4 from './images/GamingProduct4.webp';



function Home() {
    const featuredData = [
    { name: "Mortal Kombat", description: "", price: 1250, image: MKCover },
    { name: "Street Fighter", description: "", price: 1150, image: SFCover },
    { name: "Guilty Gear Strive", description: "", price: 1250, image: GuiltyGear },
    { name: "Dragon Ball Z Kakarot", description: "", price: 799, image: DBZCover }
     ];

    const newData = [
      { name: "Football Manager 24", description: "", price: 649, image: FMCover },
      { name: "Football Manager 24 ", description: "", price: 599, image: FMCover2 },
      { name: "EA FC 24 LIMITED EDITION", description: "", price: 1499, image: EAFCCover2 },
      { name: "EA FC 24", description: "", price: 1000, image: EAFCCover }
      ];

    const oldData = [
      { name: "F1 24", description: "", price: 625, image: F1Cover },
      { name: "F1 Manager", description: "", price: 625, image: F1Cover2 },
      { name: "NBA 2k24", description: "", price: 1000, image: NBA },
      { name: "WWE 2k24", description: "", price: 1250, image: WWE }
      ];

    const freeData = [
      { name: "Apex Legends", description: "", price: 0, image: GamingProduct  },
      { name: "Fortnite", description: "", price: 0, image: GamingProduct2  },
      { name: "Valorant", description: "", price: 0, image: GamingProduct3  },
      { name: "Counter-Strike", description: "", price: 0, image: GamingProduct4  }
      ];
  return (
    <div className='container'>
        <div>
          <img className='home-header' src={HomeHeader} alt='HomeHeader'/>
          <Link to="/products">
            <button className="shop-now-button">Shop Now</button>
          </Link>
          <hr className='custom-hr'></hr>
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
                      className="figure-img"
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

          <hr className='custom-hr'></hr>
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
                      className="figure-img"
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
          <hr className='custom-hr'></hr>
          <img className='home-header2' src={HomeHeader2} alt='HomeHeader2'/>
          <Link to="/products">
            <button className="shop-now-button2">Explore</button>
          </Link>
          <hr className='custom-hr'></hr>
          <div className="row g-5">
            <h className="section-header">FREE</h>
            {/* Map through the productData array and render a Card for each product */}
            {freeData.map((product, index) => (
              <div key={index} className="col-6 col-md-3 mb-3">
                <Card className='product-card'>
                  <Figure>
                    <Figure.Image
                      src={product.image}
                      alt={product.name}
                      className="figure-img"
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
          <hr className='custom-hr'></hr>
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
                      className="figure-img"
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
          <hr className='custom-hr'></hr>
          <h>TripleM</h>
        </div> 
    </div>
  )
}

export default Home;
