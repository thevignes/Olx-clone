import React, { useState } from 'react'
import './Login.css'
import { auth, googleProvider } from '../../firebase/setUp'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import GuitarLogo from '../../assets/GuitarLogo.webp'
import googleLogo from '../../assets/google.png'

const Login = ({ onClose }) => {
   const navigate = useNavigate();
   const [error, setError] = useState(null);

   const GoogleAuth = async () => {
     try {
       const result = await signInWithPopup(auth, googleProvider);
       console.log("Google login successful", result.user);
       
     
       if (onClose) {
         onClose();
       }
       
    
       navigate('/');
     } catch (error) {
       console.error("Google login error:", error);
       

       setError(error.message || "Login failed. Please try again.");
     }
   };

   const closeLogin = () => {
    console.log('closeLogin called');
    console.log('onClose prop:', onClose);
    if (onClose) {
      console.log('Calling onClose');
      onClose();
    }
    console.log('Navigating to home page');
    navigate('/');
  }

   return (
     <div className="loginContainer">
       <div className="loginOverlay"></div>
       <div className="loginModal">
         <span>India's Largest Online Marketplace</span>
         <img src={GuitarLogo} alt="OLX Logo" />
         <div className="modalHeader">
           <div className="closeBtn" onClick={closeLogin}>✕</div>
         </div>
         <div className="modalBody">
           <button className="googleBtn" onClick={GoogleAuth}>
             <img src={googleLogo} alt="Google" />
             Continue with Google
           </button>
           
           
           {error && (
             <div className="error-message">
               {error}
             </div>
           )}
         </div>
       </div>
     </div>
   )
}

export default Login
