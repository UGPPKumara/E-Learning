import React from 'react'
import './Course.css'
import { FaChartLine } from 'react-icons/fa';


const Course = ({course}) => {
  const {image, name, price, standard } = course;
  return (
    <div>
      <div className="course-card">
        <img src={image} alt="course-img"  className='course-img'/>
        <h3 className='course-name'>{name}</h3>
        <h4 className='course-price'>${price}</h4>
        <p className="course-standard"><FaChartLine className='analytic'/>{standard}</p>
        <button className='course-btn'>Explore</button>
      </div>
    </div>
  )
}

export default Course