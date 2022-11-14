import React from 'react'
import './NavBar.css'
import Button from '@mui/material/Button';

const NavBar = () => {

    const handleResume = async () => {
        let path = 'https://docs.google.com/document/d/1XsfOWz09MdY7D2luSGrTr6gqtXia2sXRVORO16oocrM';
        window.open(path);
    }

    return (
        <div id='navbar-container'>
            <div id='navbar-inner-container'>
                <div id='navbar-left-inner-container'>
                    <img id='navbar-logo' alt='Navbar Logo' src='data:image/png;base64,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'></img>
                    <a href='/#root' id='navbar-logo-name'>Zach</a>
                    <a className='navbar-link' href='/#about-me'>ABOUT</a>
                    <a className='navbar-link' href='/#experience'>EXPERIENCE</a>
                    <a className='navbar-link' href='/#projects'>PROJECTS</a>
                    <a className='navbar-link' href='/#contact-container'>CONTACT</a>
                </div>
                <div id='navbar-right-inner-container'>
                    <Button
                        onClick={handleResume}
                        variant='outlined'
                        sx={{
                            color: 'white', borderWidth: 3, borderColor: 'aqua',
                            boxShadow: '0px 5px 15px black'
                        }}>RESUME</Button>
                </div>
            </div>
        </div>
    )
}

export default NavBar