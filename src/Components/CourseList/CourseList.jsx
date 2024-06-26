import React, { useContext } from 'react'

//import links
import { Link } from 'react-router-dom'

//import context
import { CourseContext } from '../CourseContext/CourseContext'

//import course
import Course from '../Course/Course'

const CourseList = () => {
const {courses} = useContext(CourseContext);

console.log(courses);

  return (
    <div>
      <div className="course-wrapper">
        <h2>In-Demand <span>Courses</span></h2>
        <div className="course-container">
          {courses.map((course, index)=> {
            return(
             < Link to={'/course/${course.id}'} key={index}> <Course course={course}/>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CourseList