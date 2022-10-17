import React from 'react'
import './Skills.css'

function Skills() {

  return (
  
  <div id='skillsContainer'>
    <div class="skillHeadline">
      <p class="skills">SKILLS</p>
      </div>
      <div class="skillDiv">
        <a className="reactLink" href="https://www.python.org/">Python</a> 
        |
        <a className="reactLink" href="https://www.javascript.com/">Javascript</a> 
        |
        <a className="reactLink" href="https://angular.io/">Node.js</a> 
        |
        <a className="reactLink" href="https://reactjs.org/">React</a> 
      </div>
      <div class="skillDiv">
        <a className="reduxLink" href="https://redux.js.org/">Redux</a>
        | 
        <a className="awsLink" href="https://aws.amazon.com/">AWS</a> 
        |
        <a className="twitchLink" href="https://www.twitch.tv/">Twitch</a> 
        | 
        <a className='obsLink' href="https://obsproject.com/">OBS</a>
      </div>
      <div class="skillDiv">
        <a className="socketIOLink" href="https://socket.io/">SocketIO</a> 
        |
        <a className="sqlAlchemyLink" href="https://www.sqlalchemy.org/">SQL-Alchemy</a> 
        | 
        <a className="dockerLink" href="https://www.docker.com/">Docker</a>
        | 
        <a className="flaskLink" href="https://flask.palletsprojects.com/">Flask</a>
      </div>
      <div class="skillDiv">
        <a className="reactNativeLink" href="https://www.djangoproject.com/">React-Native</a>
        |
        <a className="djangoLink" href="https://flask.palletsprojects.com/">Django</a>
        |
        <a className="grommetLink" href="https://v2.grommet.io/">Grommet</a>
        |
        <a className="expressLink" href="https://expressjs.com/">Express</a> 
      </div>
      <div class="skillDiv" id="finalSkillDiv">
        <a className="pugLink" href="https://pugjs.org/">Pug</a> 
        | 
        <a className="sequelizeLink" href="https://sequelize.org/"> Sequelize</a> 
        | 
        <a className="bulmaLink" href="https://bulma.io/">Bulma</a>
      </div>
  </div>
  )
}

export default Skills