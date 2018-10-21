import React, { Component } from "react";
//import "./RoboScroll.css"

class RoboScroll extends Component {
    render () {
        return (
            <div className = "scrollable" style = {{overflowY: 'scroll', border: '3px solid black', height: '800px'}} >
                {this.props.children};
            </div>
        );
    }
}

export default RoboScroll;