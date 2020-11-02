 import React from 'react'
 import './SurveyDonkey.css'
 function SurveyDonkey() {
   return (
     <div className="surveyDonkeyContainer" >
        <div className="surveyDonkeyLinkContainer">
          <a href="https://thesurveydonkey.herokuapp.com/" className="surveyDonkeyComponent">Survey Donkey</a>
        </div>
        <div className="gitHubLinkContainer">
        <a className="surveyDonkeyGithub" href="https://github.com/about14sheep/survey-donkey">GitHub Link</a>
      </div>
       <div className="surveyDonkeyTechnologies">
         <a className="expressLink" href="https://expressjs.com/">Express</a> 
        |
          <a className="pugLink" href="https://pugjs.org/">Pug</a> 
        | 
        <a className="sequelizeLink" href="https://sequelize.org/"> Sequelize</a> 
        | 
        <a className="bulmaLink" href="https://bulma.io/">Bulma</a>
       </div>
      <div className="surveyDonkeyImageContainer">
       <img className="surveyDonkeyImage" src="https://s3.amazonaws.com/poly-screenshots.angel.co/Project/99/1205729/e796dd164ae8a528139d798cbad65b3f-original.png"></img>
     </div>
     </div>
   )
 }
 
 export default SurveyDonkey
 