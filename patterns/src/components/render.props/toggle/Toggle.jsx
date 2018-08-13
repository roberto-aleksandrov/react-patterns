import React, { Component } from 'react';

class Toggle extends Component{
    constructor(){
        super()
        
        this.state = {}
    }

    handleClick(e) {
        this.setState((oldState, props) => ({
            on: !oldState.on
        }));
    }

    render() {
        return(
            this.props.children({on: this.state.on, handleClick: this.handleClick.bind(this)})
        );
    }
}

export default Toggle;