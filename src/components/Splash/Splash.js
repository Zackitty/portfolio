import React from 'react'
import SideBar from '../SideBar/SideBar'
import JiuTube from "../JiuTube/JiuTube"
import Cause from "../Cause/Cause"
import Pixr from '../Pixr/Pixr'
import SurveyDonkey from "../SurveyDonkey/SurveyDonkey"
import './Splash.css'
function Splash() {
  console.log("dafsd")
  return (
    <div className="splashDiv">
  <SideBar />
  <div className="projectsDiv">
    <JiuTube />
    <Cause />
    <SurveyDonkey />
  </div>
  </div>
  )
}

export default Splash
