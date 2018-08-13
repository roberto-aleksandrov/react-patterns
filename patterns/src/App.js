import React, { Component } from 'react';
import './App.css';
import {AccordionUsage, ToggleUsage, ToggableHeaderUsage} from './usage';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AccordionUsage />
        <ToggleUsage /> */}
        <ToggableHeaderUsage />
      </div>
    );
  }
}

export default App;
