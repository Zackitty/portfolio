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
        <a className="gitHub" href="https://github.com/Zackitty"><img id='gitHubImg' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'></img></a>
        <a className="linkedIn" href="https://www.linkedin.com/in/zachery-haley-90a1a21b1/"><img id='linkedInImg' src='https://64.media.tumblr.com/acc3dd431e538e2a981e455a6b3b89c4/17785df92d6ab936-f1/s400x600/4e162669930278aac1df2f76980a148ea4eecc70.jpg'></img></a>
        <a className="angelList" href="https://angel.co/u/zachery-haley"><img id='angelListImg' src='https://64.media.tumblr.com/7f4da5ae3e4e1ff1fc0ac5ecf23ff60a/e83c72cf409830cb-ad/s400x600/bad884f0990fcb3d63b4e7493523213e9dec84a2.jpg'></img> </a>
        </div>
    </div>
  )
}

export default SideBar
