import React, {useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink, useHistory} from 'react-router-dom';
import Splash  from "./components/Splash/Splash"
function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/">
                <Splash/>
            </Route>
        </Switch>
      </BrowserRouter>
  
  );
}

export default App;
