import { createRoot } from 'react-dom/client'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
createRoot(document.getElementById('root')).render(
<BrowserRouter>
<ScrollToTop/>
  <App />
  </BrowserRouter>
)



// Cart:
// Add to Cart 
// Remove items from Cart 
// Reset Cart 
// Go to checkout page 
// Cart details is linked to the user logged in
// You cannot go to checkout page if you're not logged in 
// You can either Register a new account or Login to existing account 
// Cart details are stored in localstorage so it's not cleared after a hard refresh

// Login:
// You cannot proceed to checkout without logging in to your account or registering a new account

// Products:
// Products are stored in Strapi with details including categories/name/imgs/price/quantity 
// Each Category has their own products and they are distributed depending on each product 
// You can go to each category to browse the products within this category 

// Order Tracking! Profile Page !