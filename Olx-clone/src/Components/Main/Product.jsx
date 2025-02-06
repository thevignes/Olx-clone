import React from 'react'
import {  Link } from 'react-router-dom';  
import './Main.css'
const Product = ({ product }) => {

  const styles = {
    card: {
      border: '1px solid #ced4da',
      borderRadius: '4px',
      backgroundColor: '#fff',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'box-shadow 0.3s ease',
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }
    },
    favorite: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: 'rgba(255,255,255,0.9)',
      borderRadius: '50%',
      width: '36px',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 1,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    imageContainer: {
      width: '100%',
      height: '200px',
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },
    content: {
      padding: '12px',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: 'space-between'
    },
    price: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#002f34',
      marginBottom: '8px',
      lineHeight: '1.2'
    },
    title: {
      fontSize: '1rem',
      color: '#002f34',
      marginBottom: '8px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontWeight: '500'
    },
    details: {
      fontSize: '0.875rem',
      color: '#6c757d',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    location: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }
  }
  if (!product) return null;

  return (
    <div>


    <Link  to={"/detail"}  state={{product: product}}   style={styles.card}>
      <div style={styles.favorite}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002f34" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </div>
      
      <div style={styles.imageContainer}>
        <img 
          src={product.image} 
          alt={product.title}
          style={styles.image}
        />
      </div>

      <div style={styles.content}>
        <div style={styles.price}>₹ {Math.floor(product.price)}</div>
        <div style={styles.title}>{product.title}</div>
        <div style={styles.details}>
          <span>{product.category}</span>
          <span>Kerala, India</span>
          <span>Today</span>
        </div>
      </div>
    </Link>
    </div>
  )
}

export default Product