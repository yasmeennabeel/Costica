import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'

export default function App() {
  return (
    <div className='App col-12'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='shop' element={<ShopPage></ShopPage>}></Route>
        <Route path='settings' element={<h1>Settings</h1>}></Route>
        <Route path='search' element={<h1>Search</h1>}></Route>
        <Route path='login' element={<h1>Login</h1>}></Route>
        <Route path='*' element={<h1>404 Page</h1>}></Route>
      </Routes>
    </div>
  )
}
