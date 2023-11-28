

import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './navbar.css';
import logo from './subhadeep.png';
import contactImg from '../../assets/contact.png';
import { Link as ScrollLink } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {

  const[showMenu, setShowMenu] = useState(false)

  return (
      <nav className='navbar'>
        <img src={logo} alt='logo' className='navbarLogo'/> 
        <div className='navbarMenu'>

            <ScrollLink activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='navbarMenuItem'>Home</ScrollLink>
            <ScrollLink activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='navbarMenuItem'>Skills</ScrollLink>
            <ScrollLink activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className='navbarMenuItem'>Projects</ScrollLink>
            <RouterLink activeClass='active' to='/Admin' spy={true} smooth={true} offset={-100} duration={500} className='navbarMenuItem'>Admin</RouterLink>
            <RouterLink activeClass='active' to='https://drive.google.com/file/d/12Qr7FZrSEGrrkmk0ciIYJvJA65D3OWLg/view?usp=sharing' target='_blank' spy={true} smooth={true} offset={-100} duration={500} className='navbarMenuItem'>Resume</RouterLink>
        </div>
        <button className='navbarMenuBtn'>
            <img src={contactImg} alt='nu' className='navbarImgBtn'/>Contact Me</button>

            <img src={menu} alt='menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/> 
        <div className='navMenu' style={{display: showMenu? 'flex': 'none'}}>

            <ScrollLink activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='menuItem' onClick={()=>setShowMenu(false)}>Home</ScrollLink>
            <ScrollLink activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='menuItem' onClick={()=>setShowMenu(false)}>Skills</ScrollLink>
            <ScrollLink activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='menuItem' onClick={()=>setShowMenu(false)}>Projects</ScrollLink>
            <RouterLink activeClass='active' to='/Admin' spy={true} smooth={true} offset={-100} duration={500} className='menuItem' onClick={()=>setShowMenu(false)}>Admin</RouterLink>
            <RouterLink activeClass='active' to='https://drive.google.com/file/d/12Qr7FZrSEGrrkmk0ciIYJvJA65D3OWLg/view?usp=sharing' target='_blank' spy={true} smooth={true} offset={-100} duration={500} className='menuItem' onClick={()=>setShowMenu(false)}>Resume</RouterLink>
            <ScrollLink activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='menuItem' onClick={()=>setShowMenu(false)}>Contact Me</ScrollLink>
        </div>
      </nav>
  )
}

export default Navbar
