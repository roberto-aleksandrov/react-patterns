import React from 'react';
import {Toggle} from '../components/render.props/toggle';

const ToggleUsage = () => (
    <Toggle>
          {({on, handleClick}) => (
            <div>
              {on && <div>Hello</div>}
              <button onClick={handleClick}>Show/Hide</button>
            </div>
          )}
    </Toggle>
);

export default ToggleUsage;