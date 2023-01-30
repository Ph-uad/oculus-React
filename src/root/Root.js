import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../layout/footer/Footer'
import Nav from '../layout/navigation/Nav'

const Root = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root