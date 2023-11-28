import React from 'react'
import Navbar from '../navbar/Navbar';
import Intro from "../intro/Intro";
import Skill from "../skills/Skill";
import Projects from "../projects/Projects_Completed";
import Contact from '../contact/Contact';
import Footer from "../footer/Footer";


const MainBody = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skill/>
      <Projects/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  )
}

export default MainBody
