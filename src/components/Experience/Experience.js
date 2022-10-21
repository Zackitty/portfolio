import React, { useState } from 'react'
import './Experience.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box id='experience-tab-box'>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


const Experience = () => {

    const [value, setValue] = useState(0);
    const [jbVisit, setJBVisit] = useState('tab-visited');
    const [ghVisit, setGHVisit] = useState('tab-notvisited');
    const [jbVisitButton, setJBVisitButton] = useState('rgb(167, 255, 255, .3)');
    const [ghVisitButton, setGHVisitButton] = useState('rgb(167, 255, 255, 0)');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) {
            setGHVisit('tab-notvisited');
            setJBVisit('tab-visited');
            setGHVisitButton('rgb(167, 255, 255, 0)');
            setJBVisitButton('rgb(167, 255, 255, .3)');
        };
        if (newValue === 1) {
            setGHVisit('tab-visited');
            setJBVisit('tab-notvisited');
            setGHVisitButton('rgb(167, 255, 255, .3)');
            setJBVisitButton('rgb(167, 255, 255, 0)');
        };
    };


    return (
        <div id='experience-container'>
            <div id='experience-navigation'>
                <h1>
                    EXPERIENCE
                </h1>
                <Box id='experience-box'>
                    <Tabs
                        orientation='vertical'
                        variant='scrollable'
                        value={value}
                        onChange={handleChange}
                        id='experience-tabs'

                    >
                        <Tab sx={{ background: jbVisitButton }} label={<p id={jbVisit}>JB HUNT</p>} {...a11yProps(0)} />
                        <Tab sx={{ background: ghVisitButton }} label={<p id={ghVisit}>GYMHOP</p>} {...a11yProps(1)} />
                    </Tabs>
                    <TabPanel className='experience-tabpanel' value={value} index={0}>
                        <p className='experience-at'>Software Engineer 1 @ <a href='https://www.jbhunt.com/'>JB Hunt</a></p>
                        <p className='experience-date'>October 2021 - September 2022</p>
                        <div>
                            <p className='exerpience-pointer'>▸</p>
                            <p className='experience-bullets'>
                                Migrated the Infrastructure Administration Application from Protractor to Cypress for consistent End to End testing.
                            </p>
                        </div>
                        <div>
                            <p className='exerpience-pointer'>▸</p>
                            <p className='experience-bullets'>Integrated both Flagger and Kustomize into backend microservices for consistent anytime deployments. </p>
                        </div>
                        <div>
                            <p className='exerpience-pointer'>▸</p>
                            <p className='experience-bullets'>Incorporated Chips from the Angular Material UI component library into the form fields of the Infrastructure Administration Application allowing multiple values to be matched on by Apache camel routes.</p>
                        </div>
                        <div>
                            <p className='exerpience-pointer'>▸</p>
                            <p className='experience-bullets'>Localized our Infrastructure Administration Application strings to create a consistent and uniform experience, through collaboration with Message Catalog Developers.</p>
                        </div>
                        <div>
                            <p className='exerpience-pointer'>▸</p>
                            <p className='experience-bullets'>Participated in the fast paced Agile Kanban methodology of software development.</p>
                        </div>
                    </TabPanel>
                    <TabPanel className='experience-tabpanel' value={value} index={1}>
                        <p className='experience-at'>Frontend Mobile Development Engineer @ <a href='https://angel.co/company/gymhop-1'>GymHop</a></p>
                        <p className='experience-date'>July 2021 - October 2021</p>
                        <div>
                            <p className='exerpience-pointer'>▸</p>
                            <p className='experience-bullets'>Engineered fully interactive mobile screens based on Figma mockup specifications.</p>
                        </div>
                        <div>
                            <p className='exerpience-pointer'>▸</p>
                            <p className='experience-bullets'>Implemented Google-Maps API to allow users to locate and check into gyms that participate with our company.</p>
                        </div>
                        <div>
                            <p className='exerpience-pointer'>▸</p>
                            <p className='experience-bullets'>Communicated with the backend developers on API’s and creating Seed Data to allow performance of QA on frontend features.</p>
                        </div>
                    </TabPanel>
                </Box>
            </div>
        </div>
    )
}

export default Experience