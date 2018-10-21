import React, { Component } from "react";
import RoboCard from "./RoboCard";

class RoboCardList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.robotsArray.map(robot =>
                        <RoboCard
                            key={robot.id}
                            name={robot.name}
                            email={robot.email}
                            id={robot.id} />)
                }
            </div>
        );
    }
}

export default RoboCardList;