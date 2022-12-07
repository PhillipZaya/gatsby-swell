import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../assets/css/main.css'

const Layout = ({children}) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout