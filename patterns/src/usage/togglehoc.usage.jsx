import React, { Component } from 'react';
import ToggleHoc from '../components/higher.order.components';

const ToggableHeaderUsage = ToggleHoc(        
     ({on, handleClick}) => (
        <div>
            {on && <h1>Hello</h1>}
            <button onClick={handleClick}>Show/Hide</button>
        </div>
    )     
)

export default ToggableHeaderUsage;