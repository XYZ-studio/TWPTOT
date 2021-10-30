import React from 'react';
import {Switch, HashRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';

/**
 * @return{JSX}
**/
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
