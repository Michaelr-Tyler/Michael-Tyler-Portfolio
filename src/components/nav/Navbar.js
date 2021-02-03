import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export const NavBar = () => {
  const [sideBar, setSideBar] = useState(false)
  const showSideBar = () => setSideBar(!sideBar)
  return (
  <nav className="navbar">
    <div className="nav-title" onClick={()=> {
      if(sideBar){
        setSideBar()
      } 
    }}>
        <Link to='/'>
          Michael Tyler
        </Link>
    </div>
    <Link to="#" className='toggle-button' onClick={showSideBar}>
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </Link>

    <div className={sideBar ? "navbar-links active" : "navbar-links"}>
      <ul onClick={showSideBar} className="navBar__list">
        <li className="navBar__item">
          <Link to='/aboutme'>
            About Me
          </Link>
        </li>
        <li className="navBar__item">
          <Link to='/projects'>
            Projects
          </Link>
        </li>
        <li className="navBar__item">
          <Link to='/contacts'>
            Contact Me
          </Link>
        </li>
        <li className="navBar__item">
          <Link to='/blog'>
            Blog
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}