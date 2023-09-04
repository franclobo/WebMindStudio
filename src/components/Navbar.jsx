import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/pc.png";


export const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className='logo'>
          <img src={Logo} alt="logo" className="logo__img" />
          <div className="logo__txt">
            <h1 className="title">WebMinds Studio</h1>
            <p className="subtitle">Haz tu sueño digital</p>
          </div>
        </Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

