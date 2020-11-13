import React from 'react'
import './JiuTube.css'
function JiuTube() {
  return (
    <div className="jiuTubeContainer" >
      <div className="jiuTubeLinkDiv">
      <a href="https://thejiutube.herokuapp.com/" className="jiutubeComponent">The JiuTube</a>
      </div>
      <div className="gitHubLinkContainer">
        <a className="jiuTubeGithub" href="https://github.com/Zackitty/JiuTube">GitHub Link</a>
      </div>
      <div className="jiuTubeTechnologiesContainer">
      <div className="jiuTubeTechnologies">
      <a className="reactLink" href="https://reactjs.org/">React</a> 
        | 
      <a className="reduxLink" href="https://redux.js.org/">Redux</a>
        | 
        <a className="awsLink" href="https://aws.amazon.com/">AWS</a> 
        |
        <a className="twitchLink" href="https://www.twitch.tv/">Twitch</a> 
        | 
        <a className='obsLink' href="https://obsproject.com/">OBS</a>
        | 
        <a className="socketIOLink" href="https://socket.io/">SocketIO</a> 
       </div> 
       <div className="bottomTechnologiesContainer">
        <div className="bottomTechnologies">
        <a className="sqlAlchemyLink" href="https://www.sqlalchemy.org/">SQL-Alchemy</a> 
        | 
        <a className="dockerLink" href="https://www.docker.com/">Docker</a>
        | 
        <a className="flaskLink" href="https://flask.palletsprojects.com/">Flask</a>
     </div>
      </div>
      </div>
      <div className="jiuTubeImageContainer">
      <img className="jiuTubeImage"  src="https://64.media.tumblr.com/6ac1cbba035b75f9c9cd6af90be990c4/9bbe58e4a43aa6f5-4e/s2048x3072/5363fd0b840e07bb7a081bf232e1bde70b34fbf6.png"></img>
      </div>
    </div>
  )
}

export default JiuTube
