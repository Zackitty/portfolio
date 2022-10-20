import React from 'react'
import './About.css'
import jiujitsu from './jiujitsu.jpg'

const About = () => {


    return (
        <div id='about-me-container'>
            <div id='about-me-text-container'>
                <div id='about-me-h1-wrapper'>
                    <h1>
                        ABOUT ME
                    </h1>
                </div>
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
                                <div>
                                    <p>▸</p>
                                    <a href='https://www.javascript.com/'>Javascript</a>
                                </div>
                                <div>
                                    <p>▸</p>
                                    <a href='https://www.python.org/'>Python</a>
                                </div>
                                <div>
                                    <p>▸</p>
                                    <a href='https://www.java.com'>Java</a>
                                </div>
                                <div>
                                    <p>▸</p>
                                    <a href='https://spring.io/projects/spring-boot'>Spring Boot</a>
                                </div>
                                <div>
                                    <p>▸</p>
                                    <a href='https://angular.io/'>Angular</a>
                                </div>
                            </div>
                            <div id='about-me-links-container-two'>
                                <div>
                                    <p>▸</p>
                                    <a href='https://reactjs.org/'>React</a>
                                </div>
                                <div>
                                    <p>▸</p>
                                    <a href='https://www.docker.com/'>Docker</a>
                                </div>
                                <div>
                                    <p>▸</p>
                                    <a href='https://reactnative.dev/'>React-Native</a>
                                </div>
                                <div>
                                    <p>▸</p>
                                    <a href='https://www.cypress.io/'>Cypress</a>
                                </div>
                                <div>
                                    <p>▸</p>
                                    <a href='https://www.elastic.co/'>Elastic</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='about-me-image-wrapper'>
                <img id='jiujitsu-image' src={jiujitsu} />
            </div>
        </div>
    )
}

export default About