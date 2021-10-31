import React from 'react';
import {Switch, StaticRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import Rick from './components/rick';
/**
 * @return{JSX}
**/
function App() {
  return (
    <Router>
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
