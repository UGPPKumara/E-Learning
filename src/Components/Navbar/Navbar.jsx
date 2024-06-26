import React from 'react'
import { Link } from 'react-router-dom'
import { SiEducative } from 'react-icons/si'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navigation">
        <Link to='/'>
          <div className="nav-header">
            <div className="logo"><SiEducative/></div>
            <h2 className='nav-logo'>Edu<span>Kative</span></h2>
          </div>
        </Link>
        <div className="links">
          <ul>
            <li>Courses</li>
            <li>HackerSpace</li>
            <li>Coding Ground</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="nav-button">
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar