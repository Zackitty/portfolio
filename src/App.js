import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Splash  from './components/Splash/Splash';
import About  from './components/About/About';
import Experience  from './components/Experience/Experience';
import Projects  from './components/Projects/Projects';
import Contact  from './components/Contact/Contact';
import SocialMedia from './components/SocialMedia/SocialMedia'

function App() {

  return (
    <BrowserRouter>
     <NavBar  />
     <SocialMedia />
        <Switch>
            <Route path='/'>
                <Splash/>
                <About />
                <Experience />
                <Projects />
                <Contact />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/experience'>
                <Experience />
            </Route>
            <Route path='/projects'>
                <Projects />
            </Route>
            <Route path='/contact'>
                <Contact />
            </Route>
        </Switch>
      </BrowserRouter>
  
  );
}

export default App;
