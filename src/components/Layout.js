import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='page-content'>
      <Header />
      <div className='wrapper'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
