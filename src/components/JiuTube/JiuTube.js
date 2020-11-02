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
        | 
        <a className="flaskLink" href="https://flask.palletsprojects.com/">Flask</a>
        | 
        <a className="sqlAlchemyLink" href="https://www.sqlalchemy.org/">SQL-Alchemy</a> 
        | 
        <a className="dockerLink" href="https://www.docker.com/">Docker</a>
      </div>
      <div className="jiuTubeImageContainer">
      <img className="jiuTubeImage"  src="https://s3.amazonaws.com/poly-screenshots.angel.co/Project/5e/1205725/3177d53ad41f5105c7ed79a999f51526-original.jpg"></img>
      </div>
    </div>
  )
}

export default JiuTube
