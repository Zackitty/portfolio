import React from 'react'
import './Project.css'

const Project = ({ project }) => {

    return (
        <div id="project-container">
            <h1>{project.name}</h1>
            <div id="project-img-wrapper">
                <img src={project.img} />
            </div>
            <div id="project-location-links">
                <div>
                    <p className='project-pointer'>▸</p>
                    <a href={project.livelink}>LIVE</a>
                </div>
                <div>
                    <p className='project-pointer'>▸</p>
                    <a href={project.repository}>REPOSITORY</a>
                </div>
            </div>
            <div id="project-description-wrapper">
                <p>{project.description}</p>
            </div>
            <div id="project-technologies-container">
                {project.technologies.map((technology) =>
                    <div>
                        <p className='project-pointer'>▸</p>
                        <a href={technology.link}>{technology.name}</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Project