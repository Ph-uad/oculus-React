import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../layout/footer/Footer'
import Sidebar from  '../layout/sidebar/Sidebar'
import Nav from '../layout/navigation/Nav'

const Root = () => {
  return (
    <div>
        <Sidebar/>
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root