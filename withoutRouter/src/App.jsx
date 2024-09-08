// import { useState } from 'react'

import NavbarComponent from './components/NavbarComponent'
import ProductsPage from './pages/ProductsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

import './App.css'

function App() {

  let pathName = window.location.pathname.slice(1);
  console.log(pathName);
  
  function checkCurrentPage() {
    if(pathName === 'products'){
      return <ProductsPage />
    }else if(pathName === 'about'){
      return <AboutPage />
    }else if(pathName === 'contact'){
      return <ContactPage />
    }
  }

  return (
    <>
      <NavbarComponent />

      {checkCurrentPage()}
    </>
  )
}

export default App
