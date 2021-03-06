import React, { Component } from 'react';

const ToggleHoc = (WrappedComponent) => 
    class extends Component{
        constructor() {
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
                <WrappedComponent on={this.state.on} handleClick={this.handleClick.bind(this)} />
            );
        }
    }

export default ToggleHoc;