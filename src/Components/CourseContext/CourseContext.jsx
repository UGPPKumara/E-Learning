import React, {createContext, useState } from 'react'

// create Context
export const CourseContext = createContext();

// import course data
import {coursesData} from '../../data'

const  CourseContextProvider = ({children}) => {

  const [courses, setCourses] = useState(coursesData);

  return (
   <CourseContext.Provider value={{courses}}>
    {children}
   </CourseContext.Provider>
  )
}

export default CourseContextProvider