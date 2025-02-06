import { onAuthStateChanged } from 'firebase/auth'
import './App.css'
import Details from './Components/Details/Details'
import { auth } from './firebase/setUp'
import Home from './Page/Home/Home'
import Login from './Components/Login/Login'
import { Routes, Route, useNavigate, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AddProduct from './Components/Addproduct/Addproduct'

// New Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return user ? children : <Navigate to="/" state={{ from: location }} replace />;
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user, 'this is user detail');
        console.log("User logged in successfully");
        setShowLogin(false);
      } else {
        console.log("User logged out");
     
      }
    });


    const state = location.state;
    if (state && state.showLogin) {
      setShowLogin(true);
    }

    return () => unsubscribe();
  }, [navigate, location]); 

  return (
    <>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route 
          path='/detail' 
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          } 
        />
        <Route 
          path='/addproduct' 
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          } 
        />
      </Routes>

      {/* Conditional Login Modal */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  )
}

export default App
