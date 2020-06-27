import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

import { Form, Home, Attributes, NoMatch } from "./views";
import { Navigation } from "./navigation";
import styles from "./App.module.css";

const App = () => (
  <BrowserRouter
  // This Router will use the browser history.
  // If older browsers need to be supported,
  // then the `HashRouter` can be used
  // For more information, check out the docs:
  // https://reacttraining.com/react-router/web/guides/quick-start
  >
    <div className={styles.container}>
      <div className={styles.left}>
        <Navigation
        // This component has to be inside the `BrowserRouter`
        // because it will use the router's information
        // (It will access the react context through hooks)
        />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
