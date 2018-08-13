import React, { Component } from 'react';

class Accordion extends Component {
    constructor() {
        super();
        this.state = {
            displayMappings: {}
        }
    }
    
    toggle(e, name) {
        e.preventDefault();  
        this.setState((oldState) => ({
            displayMappings: {[name]: !oldState.displayMappings[name]}
        }))
    }

    render() {
        const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
            display: this.state.displayMappings[child.props.name],
            toggle: this.toggle.bind(this)
        }))
        return (
            <div>
                {children}
            </div>
        );
    }
}

export default Accordion;