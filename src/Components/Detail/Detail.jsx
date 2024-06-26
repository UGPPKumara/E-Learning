import React from 'react'
import { BiBook, BiUser, BiVideo } from 'react-icons/bi'
import { GiTeacher } from 'react-icons/gi'
import { FaCertificate } from 'react-icons/fa'
import './Detail.css'

const Detail = () => {
  return (
    <div>
      <div className="details">
        <div className="detail-container">
          <div className="detail-list">
            <div className="detail-icon"><BiVideo/></div>
            <div className="detail">
              <h2>2000+</h2>
              <p>Video Course</p>
            </div>
          </div>
          <div className="detail-list">
            <div className="detail-icon"><BiBook/></div>
            <div className="detail">
              <h2>2000+</h2>
              <p>Video Course</p>
            </div>
          </div>
          <div className="detail-list">
            <div className="detail-icon"><GiTeacher/></div>
            <div className="detail">
              <h2>300+</h2>
              <p>Expert Trainers</p>
            </div>
          </div>
          <div className="detail-list">
            <div className="detail-icon"><FaCertificate/></div>
            <div className="detail">
              <h2>1000+</h2>
              <p>Certificate Issued</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Detail