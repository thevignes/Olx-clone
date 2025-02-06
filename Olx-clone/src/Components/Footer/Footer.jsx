import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>POPULAR CATEGORIES</h4>
          <a href="/">Cars</a>
          <a href="/">Flats for rent</a>
          <a href="/">Jobs</a>
          <a href="/">Mobile Phones</a>
        </div>
        
        <div className="footer-section">
          <h4>TRENDING SEARCHES</h4>
          <a href="/">Bikes</a>
          <a href="/">Watches</a>
          <a href="/">Books</a>
          <a href="/">Dogs</a>
        </div>
        
        <div className="footer-section">
          <h4>ABOUT US</h4>
          <a href="/">About OLX Group</a>
          <a href="/">Careers</a>
          <a href="/">Contact Us</a>
          <a href="/">OLXPeople</a>
        </div>
        
        <div className="footer-section">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <a href="/"><i className="fab fa-facebook"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>All rights reserved © 2006-2025 OLX</p>
        <div className="legal-links">
          <a href="/">Terms of Use</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Sitemap</a>
        </div>
      </div>
    </div>
  )
}

export default Footer