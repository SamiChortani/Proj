import React from 'react'
import Footer from './Footer/Footer'
import NavBar from './NavBar/NavBar'

const Layout = ({children}) => {
  return (
    <>
    <div className='bg-main text-white' >
        <NavBar/>
    
    {children}
    <Footer/>
    </div>
    </>
  )
}

export default Layout