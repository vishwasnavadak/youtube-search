import React, { Component } from "react";
import "./App.css";

import YoutubeSearch from "./YoutubeSearch";

class App extends Component {
  render() {
    return (
      <div className="App" id="app">
        <YoutubeSearch />
      </div>
    );
  }
}

export default App;
