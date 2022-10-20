import React, { useRef } from 'react'
import './SurveyDonkey.css'



const SurveyDonkey = ( { projectsRef } ) => {
   return (
     <div ref={projectsRef} className='surveyDonkeyContainer' >
        <div className='surveyDonkeyLinkContainer'>
          <a href='https://thesurveydonkey.herokuapp.com/' className='surveyDonkeyComponent'>Survey Donkey</a>
        </div>
        <div className='gitHubLinkContainer'>
        <a className='surveyDonkeyGithub' href='https://github.com/about14sheep/survey-donkey'>GitHub Link</a>
      </div>
       <div className='surveyDonkeyTechnologies'>
         <a className='expressLink' href='https://expressjs.com/'>Express</a> 
        |
          <a className='pugLink' href='https://pugjs.org/'>Pug</a> 
        | 
        <a className='sequelizeLink' href='https://sequelize.org/'> Sequelize</a> 
        | 
        <a className='bulmaLink' href='https://bulma.io/'>Bulma</a>
       </div>
      <div className='surveyDonkeyImageContainer'>
      <a href='https://thesurveydonkey.herokuapp.com/'><img className='surveyDonkeyImage' src='https://64.media.tumblr.com/0f138e35c544286ec0877af3d2ac69f5/1a2382fe025de4ed-b1/s1280x1920/08804d5954559a6d8209b8913ea46149376196c2.png'></img></a>
     </div>
     <div className='projectDescriptionContainer'>
      <p className='projectDescription'>SurveyDonkey is an interactive survey creation and participation site inspired by SurveyMonkey. Designed using PUG templates for HTML and Bulma for CSS on the front end, with express and sequelize to handle the back end.</p>
      </div>
     </div>
   )
 }
 
 export default SurveyDonkey
 