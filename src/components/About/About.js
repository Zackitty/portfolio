import React from 'react'
import './About.css'
import Technologies from '../Technologies/Technologies';
import { Box } from '@mui/material';

const About = () => {


    return (
        <Box 
        id='about-me-container'>
            <div id='about-me-navigation'>
            <div id='about-me-image-wrapper'>
                <img id='jiujitsu-image' src={'https://64.media.tumblr.com/ec6f71ba3394438b1272c16ea062e348/34e934438efdb8f1-2d/s540x810/318a39a75c478cbc2383ad6d8d049f7d8fc045a0.jpg'} />
            </div>
            <Box
             id='about-me-text-container'>
                <Box id='about-me-h1-wrapper'>
                    ABOUT ME
                </Box>
                <div className='about-me-wrapper'>
                    <div>
                        I'm a Web Developer, Software Engineer, and Brazilian Jiujitsu competitor that brings my competitive mindset and initiative towards growth into everything I do.
                        I love solving logic puzzles whether it's working to figure out why data is returning unexpected results, how we can develop new features by implementing
                        the most effective tools from the endless innovative libraries,  or in Brazilian Jiujitsu competition deciding the best course of action at a breakneck pace
                        given the logical steps my opponent can take to advance their position.
                    </div>
                </div>
                <div className='about-me-wrapper'>
                    <div>
                        I've went on to work in both <a href='https://angel.co/company/gymhop-1'>startups</a> as a React-Native developer as well as <a href='https://www.jbhunt.com/'>Fortune 500 companies</a> as a Software Engineer. Working in these different
                        environments gave me several perspectives on how different people work and how to collaborate on different teams so that we’re able to develop each other’s skills
                        so that we can continue to grow and make better applications.
                    </div>
                </div>
                <div className='about-me-wrapper'>
                    <div>
                        Some of my favorite technologies I've worked with recently include:
                        <div id='about-me-links'>
                            <div id='about-me-links-container-one'>
                                <Technologies link={'https://www.javascript.com/'} technology={'Javascript'} />
                                <Technologies link={'https://www.python.org/'} technology={'Python'} />
                                <Technologies link={'https://www.java.com'} technology={'Java'} />
                                <Technologies link={'https://spring.io/projects/spring-boot'} technology={'Spring Boot'} />
                                <Technologies link={'https://angular.io/'} technology={'Angular'} />
                            </div>
                            <div id='about-me-links-container-two'>
                                <Technologies link={'https://reactjs.org/'} technology={'React'} />
                                <Technologies link={'https://www.docker.com/'} technology={'Docker'} />
                                <Technologies link={'https://www.reactnative.dev/'} technology={'React-Native'} />
                                <Technologies link={'https://www.cypress.io/'} technology={'Cypress'} />
                                <Technologies link={'https://www.elastic.co/'} technology={'Elastic'} />
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
            </div>
        </Box>
    )
}

export default About