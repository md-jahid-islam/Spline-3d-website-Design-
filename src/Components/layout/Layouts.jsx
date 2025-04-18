import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import FooterComponets from '../FooterComponets'

const Layouts = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <FooterComponets/>

    </>
  )
}

export default Layouts