import React from 'react'
import './SideBar.css'

function SideBar() {


  return (
    <div className='sideBarDiv'>
      <p className="sideBarName">Zachery Haley</p>
      <div className="restDiv">
      <img className="profileImage" src="https://64.media.tumblr.com/c7f599a13721fcbee15b169f16f7b970/952b1c2d3b269b09-0e/s1280x1920/5a90e1fb2783b84552d436751a4141cbc8a4e90a.jpg"/>
      <p className='aboutMe'>
        I'm a web developer having recently completed 1000 hours at App Academy in a fast paced immersion program as well as a jiujitsu competitor that brings my competitive mindset to every job. 
        </p>
        </div>
        <div className="linksDiv">
        <a className="gitHub" href="https://github.com/Zackitty">View My Github Profile</a>
        <a className="linkedIn" href="https://www.linkedin.com/in/zachery-haley-90a1a21b1/">View My LinkedIn Profile</a>
        <a className="angelList" href="https://angel.co/u/zachery-haley">View My Angellist Profile</a>
        </div>
    </div>
  )
}

export default SideBar
