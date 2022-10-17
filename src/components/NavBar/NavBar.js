import React from 'react'
import './NavBar.css'
import kitty from './kitty.png'

const NavBar = ( { projectsRef, ref, handleLinkClick, setPage  } ) => {


  const handleClick = async (e, page) => {
    e.preventDefault();
    setPage(page);
    handleLinkClick();
  } 
  return (
     <div id="navbar-container">
        <div id="navbar-inner-container">
            <div id="navbar-left-inner-container">
                <img id="navbar-logo" src={kitty} />
                <text id="navbar-logo-name">Zackitty</text>
                <a className="navbar-link" onClick={(e) => handleClick(e, 'about')} href="/#about">ABOUT</a>
                <a className="navbar-link" onClick={(e) => handleClick(e, 'experience')} href="/#experience">EXPERIENCE</a>
                <a className="navbar-link" onClick={(e) => handleClick(e, 'projects')} href="/#projects">PROJECTS</a>
                <a className="navbar-link" onClick={(e) => handleClick(e, 'contact')} href="/#contact">CONTACT</a>
            </div>
            <div id="navbar-right-inner-container">
                <div id='navbar-resume-wrapper'>
                    <a className="navbar-link" onClick={console.log('todo')} href="/#resume">RESUME</a>
                </div>
            </div>
        </div>
     </div>
    )
}

export default NavBar