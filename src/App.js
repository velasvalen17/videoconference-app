import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import logo from "./images/ehas.jpeg";

import { Home, Patients, VideoCall, Statistics, NoMatch } from "./views";
import { Navigation } from "./navigation";
import styles from "./App.module.css";

const App = () => (
  <Router
  // This Router will use the browser history.
  // If older browsers need to be supported,
  // then the `HashRouter` can be used
  // For more information, check out the docs:
  // https://reacttraining.com/react-router/web/guides/quick-start
  >
    <div className={styles.container}>
      <div className={styles.left}>
        <img className={styles.logo} src={logo} />
        <Navigation
        // This component has to be inside the `BrowserRouter`
        // because it will use the router's information
        // (It will access the react context through hooks)
        />
      </div>

      <div className={styles.right}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/patients" component={Patients} />
          <Route exact path="/videocall" component={VideoCall} />
          <Route exact path="/statistics" component={Statistics} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
