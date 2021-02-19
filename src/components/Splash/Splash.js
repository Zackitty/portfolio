import React from 'react'
import SideBar from '../SideBar/SideBar'
import JiuTube from "../JiuTube/JiuTube"
import Cause from "../Cause/Cause"
import SurveyDonkey from "../SurveyDonkey/SurveyDonkey"
import Skills from "../Skills/Skills"
import './Splash.css'
function Splash() {
  return (
    <div className="splashDiv">
      <div className="sideBarDivided">
        <SideBar />
        <Skills />
      </div>
      <div className="projectsDiv">
        <JiuTube />
        <Cause />
        <SurveyDonkey />
      </div>
    </div>
  )
}

export default Splash
