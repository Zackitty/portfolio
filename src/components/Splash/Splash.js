import React from 'react'
import SideBar from '../SideBar/SideBar'
import JiuTube from "../JiuTube/JiuTube"
import Cause from "../Cause/Cause"
import Pixr from '../Pixr/Pixr'
import SurveyDonkey from "../SurveyDonkey/SurveyDonkey"
import './Splash.css'
function Splash() {
  return (
    <div className="splashDiv">
  <SideBar />
  <div className="projectsDiv">
    <JiuTube />
    <Cause />
    <Pixr />
    <SurveyDonkey />
  </div>
  </div>
  )
}

export default Splash
