import Product from "../../Components/Main/Product";
import Navbar from "../../Components/Navbar/Navbar";
import React, { useState, useEffect } from 'react';
import Footer from "../../Components/Footer/Footer";
import ProductList from "../../Components/ProductDetial/ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);
  const[searchQuery,setSearchQuery ] = useState('')
  const [loading, setLoading] = useState(true);

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setProducts(json); 
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  };

 const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const styles = {
    container: {
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      marginTop: '205px',
      marginLeft:'3%'
    },
    productsGrid: {
      width: '100%',
      maxWidth: '1400px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', 
      gap: '20px',
      padding: '20px',  
      '@media (max-width: 1200px)': {
        gridTemplateColumns: 'repeat(3, minmax(230px, 1fr))',
      },
      '@media (max-width: 900px)': {
        gridTemplateColumns: 'repeat(2, minmax(230px, 1fr))',
      },
      '@media (max-width: 600px)': {
        gridTemplateColumns: '1fr',
      },
    },
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div style={styles.container}>
        <ProductList  searchQuery={searchQuery}    />
      </div>
      <Footer />
    </div>
  );
};

export default Home;