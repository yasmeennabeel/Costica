import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import Login from './pages/Login/Login'
import Footer from './components/Footer'
import Products from './pages/Products/Products'

export default function App() {
  
 const [path, setPath] = useState();
 const location = useLocation();
 useEffect(()=>{
  setPath(location.pathname);
  console.log(location.pathname)
 },[location.pathname])
   return (
    <div className='App col-12'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='shop' element={<ShopPage></ShopPage>}></Route>
        <Route path='shop/:catName' element={<Products></Products>}></Route>
        <Route path='settings' element={<h1>Settings</h1>}></Route>
        <Route path='search' element={<h1>Search</h1>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='*' element={<h1>404 Page</h1>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  )
}
