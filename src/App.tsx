import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Nav } from "./Pages/Nav/Nav";
import SceneOne from "./Pages/SceneOne/SceneOne";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Nav} />
        </Switch>
        <SceneOne />
      </div>
    </Router>
  );
}

export default App;
