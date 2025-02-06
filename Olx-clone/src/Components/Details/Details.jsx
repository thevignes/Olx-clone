import React from 'react'
import { useLocation } from 'react-router-dom'
import './Detials.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Details = () => {
  console.log('heyy venny ibvufe')
  const location = useLocation()
  const product = location.state?.product

  if (!product) {
    return <div>No product data found</div>
  }

  return (
    <div>
<Navbar/>
<div className="details-container">
      <div className="product-details">
        <div className="product-images">
          <img src={product.image} alt={product.title} className="main-image" />
        </div>
        
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">₹ {Math.floor(product.price * 80)}</p>
          <p className="product-location">Kerala, India</p>
          <p className="product-date">Posted Today</p>
          
          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          
          <div className="seller-info">
            <h3>Seller Information</h3>
            <div className="seller-details">
              <div className="seller-avatar">OLX</div>
              <div className="seller-meta">
                <p>OLX User</p>
                <p>Member since 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="product-actions">
        <button className="chat-button">Chat with Seller</button>
        <button className="call-button">Show Phone Number</button>
      </div>
    </div>
    <Footer/>
 
    </div>
  )
}

export default Details