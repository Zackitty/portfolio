import React from 'react'
import './Technologies.css'

const Technologies = ({link, technology}) => {

    return (
        <div>
            <p>▸</p>
            <a href={link}>{technology}</a>
        </div>
    )
}

export default Technologies
