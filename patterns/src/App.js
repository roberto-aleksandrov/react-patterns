import React, { Component } from 'react';
import './App.css';
import {AccordionUsage, ToggleUsage} from './usage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AccordionUsage />
        <ToggleUsage />
      </div>
    );
  }
}

export default App;
