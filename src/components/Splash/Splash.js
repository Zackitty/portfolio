import React from 'react'
import './Splash.css'
import {  Box } from '@mui/material';

function Splash() {

  return (
    <Box sx={{
      display: 'flex'
    }} id='splash-container'>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifySelf: 'flex-end',
        width: '50%',
        padding: 2
      }}>
      <div id='splash-name-text'>
        Zachery Haley
      </div>
        <div id='splash-description-text'>
          Software Engineer, Web Developer, and Jiujitsu Competitor
        </div>
      </Box>
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '50%'
        }}
      id='splash-profile-picture'>
        <img id='splash-profile-image' src={'https://64.media.tumblr.com/781c88e238229e95f10c1efab5396286/65534f6b07185a7b-db/s640x960/7ea5e6d97cca98f630415045dbe7b4e525ef5505.jpg'} />
      </Box>
    </Box >
  )
}

export default Splash
