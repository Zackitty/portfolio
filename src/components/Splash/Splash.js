import React from 'react'
import profilepicture from './profile-picture.jpg'
import './Splash.css'

function Splash() {

  return (
    <div className='splash-container'>
      <div id='splash-greeting-container'>
        <div id='splash-text-container'>
          <div id='splash-name-wrapper'>
            <text id='splash-name-text'>
              Zachery Haley
            </text>
          </div>
          <div id='splash-description-wrapper'>
            <text id='splash-description-text'>
              Software Engineer, Web Developer, and Jiujitsu Competitor
            </text>
          </div>
        </div>
      </div>
      <div id='splash-profile-picture'>
        <img id='splash-profile-image' src={profilepicture} />
      </div>

    </div>
  )
}

export default Splash
