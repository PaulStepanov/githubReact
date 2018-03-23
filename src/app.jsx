import React from "react";
import "normalize.css";

import Header from "scenes/Header";
import Repo from "scenes/Repo";

import "styles/base/_main.sass"; // Global styles
import "styles/base/_common.sass"; // Global styles
import styles from "./app.sass"; // Css-module styles

const App = () => (
  <div className="App">
    <div>
      <Header />
      <Repo />
    </div>
  </div>
);

export default App;
