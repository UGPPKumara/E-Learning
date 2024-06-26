import React from 'react'
import Hero from '../../Components/Hero/Hero'
import './Home.css'
import Trusted from '../../Components/Trusted/Trusted'
import Detail from '../../Components/Detail/Detail'
import CourseList from '../../Components/CourseList/CourseList'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Trusted/>
      <Detail/>
      <CourseList/>
    </div>
  )
}

export default Home