import React from 'react'
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <span className="header-logo">
          <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="Google Keep Logo" />
          <span className="header-logo-text">Notebook</span>
        </span>
      </h1>
    </header>
  )
}

export default Header
