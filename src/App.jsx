import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import Login from './pages/Login/Login'
import Footer from './components/Footer'
import Products from './pages/Products/Products'
import SideCart from './components/SideCart/SideCart'
import { useCart } from './store'
import { ToastContainer } from 'react-toastify'
import CheckOut from './pages/CheckOut/CheckOut'
import TrackOrder from './pages/TrackOrder/TrackOrder'
import ProfilePage from './pages/ProfilePage/ProfilePage'


export default function App() {
  const {cartIndex} = useCart()
 const [path, setPath] = useState();
 const location = useLocation();
 useEffect(()=>{
  setPath(location.pathname);
  // console.log(location.pathname)
 },[location.pathname])
   return (
    <div className='App col-12'>
      <ToastContainer></ToastContainer>
      <Header></Header>
      {cartIndex && <SideCart></SideCart>}
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='shop' element={<ShopPage></ShopPage>}></Route>
        <Route path='shop/:id' element={<Products></Products>}></Route>
        <Route path='settings' element={<h1>Settings</h1>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='track' element={<TrackOrder></TrackOrder>}></Route>
        <Route path='profile' element={<ProfilePage></ProfilePage>}></Route>
        <Route path='*' element={<h1>404 Page</h1>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  )
}


//Categories (Skin care- face care - hair care - makeup)
//Products in each category (fe relation between each product and its category)
// Create Tables 
// Two types of users (app-users and admin)
