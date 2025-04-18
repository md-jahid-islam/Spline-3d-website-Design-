import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layouts from './Components/layout/Layouts';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Products from './Pages/Products';
import Sustainability from './Pages/Sustainability';
import Career from './Pages/Career';
import Blog from './Pages/Blog';

function App() {
  return (
    <>
 <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layouts />}>
      <Route index element = {<Home/>}/>
      <Route path='/AboutUs' element = {<AboutUs/>}/>   
      <Route path='/Products' element = {<Products/>}/>   
      <Route path='/Sustainability' element = {< Sustainability/>}/>   
      <Route path='/Career' element = {< Career/>}/>   
      <Route path='/Blog' element = {< Blog/>}/>   
      </Route>
      </Routes>
    </BrowserRouter>    
    </>
  )
 }

 export default App
