import React, { Component } from "react";
import "./App.css";
import Equation from './components/Equation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Equation placeholder=". mentioning" />
      </div>
    );
  }
}

export default App;
