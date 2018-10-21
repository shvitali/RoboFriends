import React, { Component } from "react";
import "./RoboSearch";

class RoboSearch extends Component {
    render () {
        return (
            <div className = "pa2">
                <input 
                    className = "pa3 ba b--green bg-lightest-blue" 
                    type="search" 
                    placeholder = "search robots..."
                    onChange = {this.props.searchChanged}>
                </input>
            </div>
        )
    }
}

export default RoboSearch;