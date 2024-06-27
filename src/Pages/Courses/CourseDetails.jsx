import React from 'react'
import './CourseDetails.css'

import { coursesData } from '../../data'

//import params
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

  //get course id
  const {id} = useParams();

  const course = coursesData.find(course=> {
    return course.id === parseInt(id);
})


  return (
    <div>
      <div className="course-details">
        <div className="details-top">
          <div className="details-left">
            <h2 className="name">{course.name}</h2>
            <p className="desc">{course.courseDetail.description}</p>
            <p className="lang">{course.courseDetail.language}</p>
            <p className="date">{course.courseDetail.date}</p>
            <div className="price-container">
              <h3 className='price'>Price: ${course.price}</h3>
              <button>Buy Course</button>
            </div>
          </div>
          <div className="details-right">
            <img src={course.image} alt="" className="cours-img" />
          </div>
        </div>
        <div className="course-journey">
          <h2>Curriculum</h2>
          <fieldset className='field-container'>
            <legend className="phase">Phase 01</legend>
            <h3 className="p-name">{course.phase1.phaseName}</h3>
            <ul>
              <li>{course.phase1.phaseList}</li>
              <li>{course.phase1.phaseList1}</li>
              <li>{course.phase1.phaseList2}</li>
              <li>{course.phase1.phaseList3}</li>
              <li>{course.phase1.phaseList4}</li>
            </ul>
          </fieldset>
          <fieldset className='field-container'>
            <legend className="phase">Phase 02</legend>
            <h3 className="p-name">{course.phase2.phaseName}</h3>
            <ul>
              <li>{course.phase2.phaseList}</li>
              <li>{course.phase2.phaseList1}</li>
              <li>{course.phase2.phaseList2}</li>
              <li>{course.phase2.phaseList3}</li>
              <li>{course.phase2.phaseList4}</li>
            </ul>
          </fieldset>
          <fieldset className='field-container'>
            <legend className="phase">Phase 03</legend>
            <h3 className="p-name">{course.phase3.phaseName}</h3>
            <ul>
              <li>{course.phase3.phaseList}</li>
              <li>{course.phase3.phaseList1}</li>
              <li>{course.phase3.phaseList2}</li>
              <li>{course.phase3.phaseList3}</li>
              <li>{course.phase3.phaseList4}</li>
            </ul>
          </fieldset>
          <fieldset className='field-container'>
            <legend className="phase">Phase 04</legend>
            <h3 className="p-name">{course.phase4.phaseName}</h3>
            <ul>
              <li>{course.phase4.phaseList}</li>
              <li>{course.phase4.phaseList1}</li>
              <li>{course.phase4.phaseList2}</li>
              <li>{course.phase4.phaseList3}</li>
              <li>{course.phase4.phaseList4}</li>
            </ul>
          </fieldset>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails