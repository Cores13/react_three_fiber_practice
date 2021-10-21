import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { Content } from "./Pages/Content/Content";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/content' component={Content} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
