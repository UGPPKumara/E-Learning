import React from 'react'
import glovo from '../../assets/glovo-logo.svg'
import oracle from '../../assets/oracle-logo.svg'
import paypal from '../../assets/paypal-logo.svg'
import payoneer from '../../assets/payoneer-logo.svg'
import stripe from '../../assets/stripe-logo.svg'
import './Trusted.css'


const Trusted = () => {
  return (
    <div>
      <div className="trusted">
        <div className="trusted-container">
          <h3 className="trusted-header">Our Alumini work in this company</h3>
          <div className="trusted-img">
            <img src={glovo} alt=""  className='logo'/>
            <img src={oracle} alt="" className='logo' />
            <img src={paypal} alt=""  className='logo'/>
            <img src={payoneer} alt="" className='logo' />
            <img src={stripe} alt="" className='logo' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trusted