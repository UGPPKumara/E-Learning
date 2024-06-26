import React from 'react'
import './Hero.css'
import Classroom from '../../assets/class.jpg'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <h1>Unlock your potential with Top-Tire Online Courses </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio animi, minus nisi earum itaque quibusdam adipisci maiores. Dolores iure assumenda nobis voluptates nemo quidem possimus expedita, illo ratione, labore quasi.</p>
        <div className="btn">
          <button className="cta-btn">Explore Courses</button>
        </div>
        <img src={Classroom} alt="" />
      </div>
    </div>
  )
}

export default Hero