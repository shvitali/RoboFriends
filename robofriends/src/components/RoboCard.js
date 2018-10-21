import React, { Component } from "react";
import "./RoboCard.css";

class RoboCard extends Component {
    render() {
        const { id, name, email } = this.props;
        return (
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 robotCard">
                <img src={`https://robohash.org/${id}?size=200x200`} alt="Robot profile" />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        )
    }
}

export default RoboCard;