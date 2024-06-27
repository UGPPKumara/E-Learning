import React from 'react'
import './Footer.css'
import facebook from '../../assets/facebook_icon.png'
import twitter from '../../assets/twitter_icon.png'
import linkedin from '../../assets/linkedin_icon.png'


const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
          <div className="content-left">
            <h2>EduKative</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur praesentium corrupti nesciunt animi in voluptates cupiditate necessitatibus atque ducimus dolore?</p>
            <div className="social-icons">
              <img src={facebook} alt="social-icons" className="icons" />
              <img src={twitter} alt="social-icons" className="icons" />
              <img src={linkedin} alt="social-icons" className="icons" />
            </div>
          </div>
          <div className="content-center">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Privacy Policy</li>
            </ul>   
          </div>
          <div className="content-right">
            <h2>Get in Touch</h2>
            <ul>
              <li>Phone: +940698965</li>
              <li>Email: support@gmail.com</li>
              <li>Address: 123 Business St. Suite 100, City State</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copiright">Copiright 2024 @Company. All right Reserved</p>
      </div>
    </div>
  )
}

export default Footer