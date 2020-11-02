import React from 'react'
import './Pixr.css'
function Pixr() {
  return (
    <div className="pixrContainer" >
      <div className="pixrLinkContainer">
      <a href="https://pixr-fsp.herokuapp.com/" className="pixrComponent">Pixr</a>
      </div>
      <div className="gitHubLinkContainer">
        <a className="pixrGithub" href="https://github.com/Zackitty/pixr">GitHub Link</a>
      </div>
      <div className="pixrTechnologies">
      <a className="expressLink" href="https://expressjs.com/">Express</a> 
        |
        <a className="reactLink" href="https://reactjs.org/">React</a> 
        | 
        <a className="reduxLink" href="https://redux.js.org/">Redux</a>
        | 
        <a className="awsLink" href="https://aws.amazon.com/">AWS</a> 
        | 
        <a className="sequelizeLink" href="https://sequelize.org/"> Sequelize</a> 
        </div>
         <div className="pixrImageContainer">
         <img className="pixrImage"  src="https://s3.amazonaws.com/poly-screenshots.angel.co/Project/fb/1205727/947614c9d726249b1f19f3d8f4e45aa3-original.jpg"></img>
         </div>
    </div>
  )
}

export default Pixr
