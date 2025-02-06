import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Login from '../Login/Login';
import { auth, signOut } from '../../firebase/setUp';
import AddProduct from '../Addproduct/Addproduct';
import { useNavigate } from 'react-router-dom';

const Navbar = ({onSearch}) => {
  const [isLoggedin, setLoggedin] = useState(false);
  const [logipop, setLogoinpop] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
const[searchQuery,setSearchQuery] = useState('')

const handleSearchange = (e) => {
  e.preventDefault();
  const query = e.target.value;
  setSearchQuery(query); 
  onSearch(query)
console.log(query);

};

const navigate = useNavigate()

const HandelClick = ()=>{
if(isLoggedin){
  navigate('/addproduct')
}else{
  setLogoinpop(!logipop)
}
 
}


const hancleClick = ()=>{
  navigate('/')
}

const handlecChangeclick = ()=>{
  if(onSearch){
    onSearch(searchQuery)
  }
}
  useEffect(() => {
    const unsuscriber = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedin(true);
      } else {
        setLoggedin(false);
      }
    });

    return () => {
      unsuscriber();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoggedin(false);
      setShowProfileDropdown(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="header">
      <div className="headerParent">
        <a onClick={hancleClick}>
        <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-w4DG7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>

        </a>

      
        <div className="locationBox">
          <div className="locationSearch">
            <div className="searchIcon">
              <svg width="25" height="25" viewBox="0 0 1024 1024" fill="#002f34">
                <path d="M448 725.33c-152.92 0-277.33-124.41-277.33-277.33S295.08 170.67 448 170.67 725.33 295.08 725.33 448 600.92 725.33 448 725.33zm436.44 98.78v.02L732.52 672.19c48.77-61.78 77.81-139.54 77.81-224.19 0-199.95-162.38-362.33-362.33-362.33S85.67 248.05 85.67 448 248.05 810.33 448 810.33c84.65 0 162.41-29.04 224.19-77.81l151.92 151.92c16.67 16.67 43.68 16.67 60.35 0 16.67-16.66 16.67-43.68 0-60.33z"/>
              </svg>
            </div>
            <input type="text" placeholder="India" value="India" />
            <div className="angleDown">
              <svg width="24px" height="24px" viewBox="0 0 1024 1024" fill="#002f34">
                <path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"/>
              </svg>
            </div>
          </div>
        </div>

 
        <div className="searchBox">
          <input className='text-color 900' type="text" placeholder="Search Products....."  value={searchQuery} onChange={handleSearchange}/>
          <button className="searchButton" onClick={handlecChangeclick}>
            <svg width="25" height="25" viewBox="0 0 1024 1024" fill="#ffffff">
              <path d="M448 725.33c-152.92 0-277.33-124.41-277.33-277.33S295.08 170.67 448 170.67 725.33 295.08 725.33 448 600.92 725.33 448 725.33zm436.44 98.78v.02L732.52 672.19c48.77-61.78 77.81-139.54 77.81-224.19 0-199.95-162.38-362.33-362.33-362.33S85.67 248.05 85.67 448 248.05 810.33 448 810.33c84.65 0 162.41-29.04 224.19-77.81l151.92 151.92c16.67 16.67 43.68 16.67 60.35 0 16.67-16.66 16.67-43.68 0-60.33z"/>
            </svg>
          </button>
        </div>

      
        <div className="language">
          <span>ENGLISH</span>
          <svg width="24px" height="24px" viewBox="0 0 1024 1024" fill="#002f34">
            <path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"/>
          </svg>
        </div>

     
        <div className="loginLink">
          {isLoggedin ? (
            <div style={{ position: 'relative' }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Profile"
                style={{ width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer' }}
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              />
              {showProfileDropdown && (
                <div
                  style={{
                    position: 'absolute',
                    top: '40px',
                    right: '0',
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    padding: '10px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    zIndex: 1000,
                  }}
                >
                  <div style={{ padding: '5px 0' }}>
                    {auth.currentUser?.displayName || 'User'}
                  </div>
                  <div
                    style={{
                      padding: '5px 0',
                      cursor: 'pointer',
                      color: '#002f34',
                      fontWeight: 'bold',
                    }}
                    onClick={handleLogout}
                  >
                    Profile
                    Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <span onClick={() => setLogoinpop(!logipop)}>Login</span>
          )}
        </div>

        {/* Sell Button */}
        
        <div className="sellButton">
          <button onClick={HandelClick} className="sell">
            <span>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              SELL
            </span>
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="subHeader">
        <div className="categoriesParent">
          <div className="categories">
            <span>ALL CATEGORIES</span>
            <svg width="24px" height="24px" viewBox="0 0 1024 1024" fill="#002f34">
              <path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"/>
            </svg>
          </div>
          <div className="categoryLinks">
            <a href="#">Cars</a>
            <a href="#">Motorcycles</a>
            <a href="#">Mobile Phones</a>
            <a href="#">For Sale: Houses & Apartments</a>
            <a href="#">Scooters</a>
            <a href="#">Commercial & Other Vehicles</a>
            <a href="#">For Rent: Houses & Apartments</a>
          </div>
        </div>
      </div>
      {logipop && <Login onClose={() => setLogoinpop(false)} />}
    </div>
  );
};

export default Navbar;