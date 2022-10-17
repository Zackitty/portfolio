import React, { useRef, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Splash  from './components/Splash/Splash';
import About  from './components/About/About';
import Experience  from './components/Experience/Experience';
import Projects  from './components/Projects/Projects';
import Contact  from './components/Contact/Contact';

function App() {

  const [page, setPage] = useState(false)
  const ref = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleLinkClick = async() => {  
    if (page === 'about') {
      aboutRef.current?.scrollIntoView( { behavior: "smooth" } )
    }
    if (page === 'experience') {
      experienceRef.current?.scrollIntoView( { behavior: "smooth" } )
    }
    if (page === 'projects') {
      projectsRef.current?.scrollIntoView( { behavior: "smooth" } )
    }
    if (page === 'contact') {
      projectsRef.current?.scrollIntoView( { behavior: "smooth" } )
    }
  };

  return (
    <BrowserRouter>
     <NavBar handleLinkClick={handleLinkClick} setPage={setPage} ref={ref} />
        <Switch>
            <Route path="/nope">
                <Splash/>
            </Route>
            <Route path="/">
                <About aboutRef={aboutRef} />
            </Route>
            <Route path="/#experience">
                <Experience experienceRef={experienceRef} />
            </Route>
            <Route path="/#projects">
                <Projects projectsRef={projectsRef} />
            </Route>
            <Route path="/#contact">
                <Contact contactRef={contactRef} />
            </Route>
            <Route path="/#resume">
                <Contact contactRef={contactRef} />
            </Route>
        </Switch>
      </BrowserRouter>
  
  );
}

export default App;
