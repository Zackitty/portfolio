import React from 'react'
import './Cause.css'
function Cause() {
  return (
    <div className="causeContainer" >
        <div className="causeLinkDiv">
       <a href="http://changeclone.herokuapp.com/" className="causeComponent">Cause</a>
       </div>
       <div className="gitHubLinkContainer">
        <a className="causeGithub" href="https://github.com/sambrady0652/change-clone">GitHub Link</a>
      </div>
      <div className="causeTechnologiesContainer">
      <div  className="causeTechnologies">
        <a className="reactLink" href="https://reactjs.org/">React</a> 
        | 
        <a className="reduxLink" href="https://redux.js.org/">Redux</a>
        | 
        <a className="flaskLink" href="https://flask.palletsprojects.com/">Flask</a>
        | 
        <a className="sqlAlchemyLink" href="https://www.sqlalchemy.org/">SQL-Alchemy</a> 
        | 
        <a className="awsLink" href="https://aws.amazon.com/">AWS</a> 
        | 
      <a className="grommetLink" href="https://v2.grommet.io/">Grommet</a>
      </div>
      <div className="causeBottomTechnologies">
      <a className="dockerLink" href="https://www.docker.com/">Docker</a>
      </div>
      </div>
        
       <div className="causeImageContainer">
       <img className="causeImage" src="https://64.media.tumblr.com/806f8ed47285ec5deaf44ae134cb2bc0/c9d0d1eff5e6459f-5d/s1280x1920/7e4de237093051365e8164af417fd1c8517ccc2d.png"></img>
    </div>
    </div>
  )
}

export default Cause
