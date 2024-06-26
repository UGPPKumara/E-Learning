
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import CourseDetails from './Pages/Courses/CourseDetails'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'


function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/course/:id' element={<CourseDetails/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
