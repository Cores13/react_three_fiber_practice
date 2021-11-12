import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Nav } from "./Pages/Nav/Nav";
import SceneOne from "./Pages/SceneOne/SceneOne";
import { HomeMobile } from "./Pages/Mobile/HomeMobile/HomeMobile";
import { ContactMobile } from "./Pages/Mobile/ContactMobile/ContactMobile";
import { ServicesMobile } from "./Pages/Mobile/ServicesMobile/ServicesMobile";
import { AboutMobile } from "./Pages/Mobile/AboutMobile/AboutMobile";
import MobileOverlay from "./Pages/SceneOne/MobileOverlay";
import "./Pages/SceneOne/SceneOne.css";

function App() {
  const isMobile = window.innerWidth <= 700;

  const baseUrl: any = document
    .getElementsByTagName("base")[0]
    .getAttribute("href");
  // const baseUrl = "https://voxmagna.co";

  return (
    <Router basename={baseUrl}>
      <div className={isMobile ? "app" : "App"}>
        <Switch>
          {isMobile ? (
            <>
              {/* {isMobile && <MobileOverlay />} */}
              <Route exact path='/' component={MobileOverlay} />
              <Route path='/home' component={HomeMobile} />
              <Route path='/contact' component={ContactMobile} />
              <Route path='/services' component={ServicesMobile} />
              <Route path='/about' component={AboutMobile} />
            </>
          ) : (
            <Route exact path='/' component={Nav} />
          )}
        </Switch>
        {isMobile ? null : <SceneOne />}
      </div>
    </Router>
  );
}

export default App;
