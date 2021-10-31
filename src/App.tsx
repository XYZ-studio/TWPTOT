import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import Rick from './components/rick';
/**
 * @return{JSX.Element}
**/
function App(): JSX.Element {
  return (
    <Router basename="/TWPTOT">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rick">
          <Rick />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
