import React from 'react'
import './Projects.css'
import Carousel from 'react-material-ui-carousel'
import Project from './Project/Project'
import projectsData from './ProjectsData'
import kittyindicator from './kittyindicator.svg'


const Projects = () => {


    return (
        <div id='projects'>
            <h1>PROJECTS</h1>
            <Carousel
                sx={{
                    width: '50%',
                    '@media screen and (max-width: 800px)': {
                        height: '1000px',
                        width: '500px'
                    }
                }}
                IndicatorIcon={
                    <img id='projects-indicator' alt='Indicator Kitty' src={kittyindicator} />
                }
                indicatorIconButtonProps={{
                    style: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 50,
                        width: 50,
                        marginLeft: 10,
                        padding: '10px',
                        opacity: .3,
                        '@media screen and (max-width: 800px)': {
                            
                        }
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {

                        opacity: 'unset'

                    }
                }}
                indicatorContainerProps={{
                    style: {
                        textAlign: 'right',
                        display: 'flex',
                        flexDirection: 'row',
                        height: 50,
                        width: '100%',
                        justifyContent: 'center',
                        marginTop: '1%',

                    }

                }}
            >
                {
                    projectsData.map((project, i) => <Project key={i} project={project} />)
                }
            </Carousel>
        </div>
    )
}

export default Projects