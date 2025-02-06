import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Addproduct.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {db} from '../../firebase/setUp';
import {collection,addDoc} from 'firebase/firestore';




const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dgtswnvyb/image/upload"; 
const UPLOAD_PRESET = "olx-clone"; 

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !price || !category || !image) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    
    try {
      
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', UPLOAD_PRESET);

      const uploadResponse = await axios.post(CLOUDINARY_URL, formData);
      const imageUrl = uploadResponse.data.secure_url;

      
      const productData = {
        title,
        description,
        price,
        category,
        image: imageUrl, 
      };

      const docRef = await addDoc(collection(db, "products"), productData);
      console.log("Product Data:", productData , docRef);
 
if(productData){

  toast.success('product added successfully',{
    position:"top-right",
    autoClose:2000

  })
navigate('/')
}

    } catch (error) {
      console.error("Error adding product:", error);
      setError("Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="addProductContainer">
        <h2>Add a New Product</h2>
        {error && <p className="error">{error}</p>}
        {loading && <p>Uploading image...</p>}
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter product title" />
          </div>
          <div className="formGroup">
            <label>Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter product description" />
          </div>
          <div className="formGroup">
            <label>Price</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter product price" />
          </div>
          <div className="formGroup">
            <label>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select category</option>
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
              <option value="clothing">Clothing</option>
              <option value="vehicles">Vehicles</option>
            </select>
          </div>
          <div className="formGroup">
            <label>Upload Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <button type="submit" className="submitButton" disabled={loading}>
            {loading ? "Uploading..." : "Add Product"}
          </button>
        </form>
      </div>
      <Footer />
      <ToastContainer />

    </>
  );
};

export default AddProduct;
