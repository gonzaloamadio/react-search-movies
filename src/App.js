import React from 'react';
// Switch to enter to the first route that satisfy a rule
// Route, let us declare routes in declarative way
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Page404 from './pages/404'
import './App.css';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/detail/:id' component={Detail} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
