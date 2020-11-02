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
      |
      <a className="dockerLink" href="https://www.docker.com/">Docker</a>
        </div>
       <div className="causeImageContainer">
       <img className="causeImage" src="https://s3.amazonaws.com/poly-screenshots.angel.co/Project/d7/1205730/e012e98129ad583ec78c2cdd9f807d8a-original.ico"></img>
    </div>
    </div>
  )
}

export default Cause
