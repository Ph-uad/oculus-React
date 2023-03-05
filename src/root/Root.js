import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../layout/footer/Footer'
import Nav from '../layout/navigation/Nav'
import Notification from '../components/notification/Notification'

const Root = () => {
  return (
    <div>
        <Notification/>
        <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Root